/**
 * ?Promise 的含义
 * * Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
 * *它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象
 *
 * !特点
 * * 对象的状态不受外界影响。Promise对象代表一个异步操作，
 * * 有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
 * * 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
 * * 这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
 *
 * *（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。
 * *Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
 * *只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，
 * *你再对Promise对象添加回调函数，也会立即得到这个结果。
 * *这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
 *
 * ? Promise.prototype.then()
 * *Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的
 * *它的作用是为 Promise 实例添加状态改变时的回调函数。
 * *前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。
 * *then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法
 *
 * ? Promise.prototype.catch()
 * * Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数
 *
 * ? Promise.prototype.finally()
 * *finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的
 *
 * ? Promise.all()
 * !const p = Promise.all([p1, p2, p3]);
 * *Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 * *上面代码中，Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，
 * *就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
 * *另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例
 *
 * * 实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。
 *
 * ? Promise.race()
 * *Promise.race()方法的参数与Promise.all()方法一样，
 * *如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve()方法，将参数转为 Promise 实例，再进一步处理。
 *
 * * 实例的状态只要有一个变成fulfilled，或者有一个变为rejected，就会调用Promise.race方法后面的回调函数。
 *
 * ? Promise.allSettled()
 * * 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
 * *只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束
 *
 * ? Promise.any()
 * *ES2021 引入了Promise.any()方法
 * *该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。
 * *只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。
 *
 * ? Promise.resolve()
 * * 有时需要将现有对象转为 Promise 对象 该实例的状态为 resolve
 * * 等价 new Promise(resolve => resolve('foo'))
 *
 * ? Promise.reject()
 * * Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected
 *
 * ? Promise.try()
 * * async 方法
 * * new Promise()
 *
 * ? async await
 *
 * ! 它们是基基于promises的语法糖，使异步代码更易于编写和阅读
 * * async 关键字加到函数申明中，可以告诉它们返回的是 promise
 * *当 await 关键字与异步函数一起使用时，它的真正优势就变得明显了 ——
 * ! 事实上， await 只在异步函数里面才起作用
 *
 * ? async/await的缺陷
 * * Async/await 让你的代码看起来是同步的，在某种程度上，也使得它的行为更加地同步。
 * * await 关键字会阻塞其后的代码，直到promise完成，就像执行同步操作一样。
 * * 它确实可以允许其他任务在此期间继续运行，但您自己的代码被阻塞
 *
 * ?如何解决缺陷
 * *有一种模式可以缓解这个问题——通过将Promise 对象存储在变量中来同时开始它们，
 * *然后等待它们全部执行完毕
 */

// ?模拟Promise
enum promiseStatus {
  PENDING= 'pending',
    FULFILLED= 'fulfilled',
    REJECTED= 'rejected',
}

interface Callback {
  (arg: any): void
}

interface DefCallback {
  (arg: any): any
}

class FakePromise {
  constructor(executor) {
    this.status = promiseStatus.PENDING

    try {
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch (e) {
      this._reject(e)
    }
  }

  private status: promiseStatus

  private fulfilledCallbacks: Callback[]  = []

  private rejectedCallbacks: Callback[] = []

  private value: any = undefined

  private reason: any = undefined

  private _resolve (value: any) {
    if (this.status === promiseStatus.PENDING) {
      this.value = value
      this.status = promiseStatus.FULFILLED
      this.fulfilledCallbacks.forEach(fn => fn(this.value))
    }
  }

  private _reject (reason: any) {
    if (this.status === promiseStatus.PENDING) {
      this.reason = reason
      this.status = promiseStatus.REJECTED
      this.rejectedCallbacks.forEach(fn => fn(this.reason))
    }
  }

  private static resolvePromise (p: FakePromise, x: unknown, resolve: DefCallback, reject: DefCallback) {
    if (p === x) {
      throw new Error('Chaining cycle detected for promise #<Promise>')
    }

    if (typeof x === 'function' || typeof x === 'object') {
      if (x === null) {
        return resolve(x)
      }

      let then
      try {
        // @ts-ignore
        then = x.then
      } catch (e) {
        reject(e)
      }

      if (typeof then === 'function') {
        let called = false
        try {
          then.call(x, value => {
            if (called) return

            called = true
            FakePromise.resolvePromise(p, value, resolve, reject)
          }, reason =>{
            if (called) return
            called = true
            reject(reason)
          })
        } catch (e) {
          if (called) return

          reject(e)
        }
      } else {
        resolve(x)
      }
    } else {
      resolve(x)
    }
  }

  then (fulfilledCb = (value: any) => value, rejectedCb = (reason: any) => reason) {
    const p = new FakePromise((resolve, reject) => {
      if (this.status === promiseStatus.PENDING) {
        this.fulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = fulfilledCb(this.value)

              FakePromise.resolvePromise(p, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.rejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = rejectedCb(this.reason)

              FakePromise.resolvePromise(p, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      } else if (this.status === promiseStatus.FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = fulfilledCb(this.value)

            FakePromise.resolvePromise(p, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.status === promiseStatus.REJECTED) {
        queueMicrotask(() => {
          try {
            const x = rejectedCb(this.reason)

            FakePromise.resolvePromise(p, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return p
  }

  catch (reject) {
    return this.then(null, reject)
  }

  finally (cb: Callback) {
    return this.then(value => {
      return FakePromise.resolve(cb).then(() => value)
    }, reason => {
      return FakePromise.reject(cb).then(null,() => reason)
    })
  }

  static all (promiseArr: FakePromise[]) {
    if (promiseArr.length === 0) return FakePromise.reject(promiseArr)

    return new FakePromise((resolve, reject) => {
      const result = []
      let num = 0

      const check = () => {
        if (num === promiseArr.length) {
          resolve(result)
        }
      }

      promiseArr.forEach((promise, index) => {
        FakePromise.resolve(promise).then(value => {
          result[index] = value
          num++
          check()
        },reason => {
          reject(reason)
        })
      })
    })
  }

  static allSettled (promiseArr: FakePromise[]) {
    if (promiseArr.length === 0) return FakePromise.reject(promiseArr)

    return new FakePromise((resolve, reject) => {
      const result = []
      let num = 0

      const check = () => {
        if (num === promiseArr.length) {
          resolve(result)
        }
      }

      promiseArr.forEach((promise, index) => {
        FakePromise.resolve(promise).then(value => {
          result[index] = { status: 'fulfilled', value: value }
          num++
          check()
        },reason => {
          result[index] = { status: 'rejected', value: reason }
          num++
          check()
        })
      })
    })
  }

  static any (promiseArr: FakePromise[]) {
    if (promiseArr.length === 0) return FakePromise.reject(promiseArr)

    return new FakePromise((resolve, reject) => {
      const result = []
      let num = 0

      const check = () => {
        if (num === promiseArr.length) {
          reject(new Error('No Promise in Promise.any was resolved'))
        }
      }

      promiseArr.forEach((promise, index) => {
        FakePromise.resolve(promise).then(value => {
          resolve(value)
        },reason => {
          result[index] = { status: 'rejected', value: reason }
          num++
          check()
        })
      })
    })
  }

  static race (promiseArr: FakePromise[]) {
    if (promiseArr.length === 0) return FakePromise.reject(promiseArr)

    return new FakePromise((resolve, reject) =>{
      promiseArr.forEach(promise => {
        promise.then(resolve, reject)
      })
    })
  }

  static resolve (value: FakePromise | any) {
    if (value instanceof FakePromise) {
      return value
    } else {
      return new FakePromise((resolve) => {
        resolve(value)
      })
    }
  }

  static reject (reject: any) {
    return new FakePromise((resolve, reject) => {
      reject(reject)
    })
  }
}
