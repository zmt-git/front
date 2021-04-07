enum StatusEnums {
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected'
}

class PromiseMine {
  status: StatusEnums
  value: any
  reason: any
  onResolveCallbacks: Function[]
  onRejectedCallbacks: Function[]

  constructor(executor) {
    this.status = StatusEnums.pending
    this.value = undefined
    this.reason = undefined
    this.onResolveCallbacks = []
    this.onRejectedCallbacks = []
    let resolve = (value) => {
      if (this.status === StatusEnums.pending) {
        this.status = StatusEnums.fulfilled
        this.value = value
        this.onResolveCallbacks.forEach(fn => fn())
      }
    }

    let reject = (reason) => {
      if (this.status === StatusEnums.pending) {
        this.status = StatusEnums.rejected
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  private timeoutFn (fn:Function, val: any, promise2: PromiseMine, resolve: Function, reject: Function) {
    setTimeout(() => {
      try {
        let x = fn(val)
        this.resolvePromise(promise2, x, resolve, reject)
      } catch (err){
        reject(err)
      }
    }, 0)
  }

  private resolvePromise (p: PromiseMine, x:any, resolve: Function, reject: Function) {
    if (p === x) {
      throw new TypeError("Chaining cycle detected for promise #<Promise>")
    }

    let called = false

    if ((typeof x === 'object' && x !== null) || (typeof x === 'function')) {
      try {
        let then = x.then

        if (typeof then === 'function') {
          then.call(x, (y) => {
            if (called) return
            called = true
            this.resolvePromise(p, y, resolve, reject)
          }, (e) => {
            if (called) return
            called = true
            reject(e)
          })
        }
      } catch (e) {
        if (called) return
        called = true
        reject(e)
      }
    } else {
      resolve(x)
    }
  }

  then (onFulfilled: Function, onRejected: Function) {
    let promise2 = new PromiseMine((resolve, reject) => {
      if (this.status === StatusEnums.fulfilled) {
        this.timeoutFn(onFulfilled, this.value, promise2, resolve, reject)
      }

      if (this.status === StatusEnums.rejected) {
        this.timeoutFn(onRejected, this.reason, promise2, resolve, reject)
      }

      if (this.status === StatusEnums.pending) {
        this.onResolveCallbacks.push(() => {
          this.timeoutFn(onFulfilled, this.value, promise2, resolve, reject)
        })
        this.onRejectedCallbacks.push(() => {
          this.timeoutFn(onRejected, this.reason, promise2, resolve, reject)
        })
      }
    })

    return promise2
  }

  static all (promiseArr: PromiseMine[]) {
    let index = 0, result = []

    return new PromiseMine((resolve, reject) => {
      promiseArr.forEach((promise, i) => {
        PromiseMine.resolve(promise).then(val => {
          result.push({
            status: 'fulfilled',
            value: val
          })
          if (result.length === promiseArr.length) {
            resolve(result) 
          }
        }, err => {
          result.push({
            status: 'rejected',
            value: err
          })
          if (result.length === promiseArr.length) {
            resolve(result) 
          }
        })
      })
    })
  }

  static race () {}

  static resolve (value) {
    if (value instanceof PromiseMine) {
      return value
    }
    return new PromiseMine(resolve => resolve(value))
  }

  static reject (reason) {
    return new PromiseMine((resolve, reject) => reject(reason))
  }

  static any () {

  }

  static allSettled () {}

}
