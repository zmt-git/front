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
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function isFunction (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}
class Promise {
  constructor (executor) {
    if (!isFunction(executor)) {
      throw new Error('Promise must accept a function as a parameter')
    }
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledQueues = []
    this.onRejectedQueues = []

    try {
      executor(this._resolve, this._reject)
    } catch (e) {
      this.reject(e)
    }
  }

  _resolve (value) {
    setTimeout(() => {
      if (this.status !== PENDING) return
      this.value = value
      this.status = FULFILLED
      let cd
      while (cd = this.onFulfilledQueues.shift()) {
        cd(this.value)
      }
    }, 0)
  }

  _reject (reason) {
    setTimeout(() => {
      if (this.status !== PENDING) return
      this.reason = reason
      this.status = REJECTED
      let cd
      while (cd = this.onRejectedQueues.shift()) {
        cd(this.reason)
      }
    }, 0)
  }

  then (onFulfilled, onRejected) {
    return new Promise((onFulfilledNext, onRejectedNext) => {
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value)
          } else {
            let res = onFulfilled(value)
            if (res instanceof Promise) {
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              onFulfilledNext(value)
            }
          }
        } catch (e) {
          onRejectedNext(e)
        }
      }

      let rejected = reason => {
        try {
          if (!isFunction(onRejected)) {
            onFulfilledNext(reason)
          } else {
            let res = onFulfilled(reason)
            if (res instanceof Promise) {
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              onFulfilledNext(reason)
            }
          }
        } catch (e) {
          onRejectedNext(e)
        }
      }

      switch (this.status) {
        case PENDING : 
          this.onFulfilledQueues.push(fulfilled)
          this.onRejectedQueues.push(rejected)
          break;
        case FULFILLED :
          fulfilled(this.value)
          break;
        case REJECTED :
          rejected(this.reason)
          break;
        default : null
      }
    })
  }
  
  catch () {}

  finally () {}

  static all ()

  static race ()

  static resolve ()
  
  static reject ()

  static any ()

  static allSettled ()
}