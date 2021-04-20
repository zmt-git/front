// 事件发布/订阅模式 (PubSub) 在异步编程中帮助我们完成更松的解耦, 甚至在 MVC、MVVC 的架构中以及设计模式中也少不了发布-订阅模式的参与。

// 优点: 在异步编程中实现更深的解耦

// 缺点: 如果过多的使用发布订阅模式, 会增加维护的难度
class Event {
  constructor () {
    this.eventObj = {}
  }

  on (eventType, callBack) {
    if (!this.eventObj[eventType]) {
      this.eventObj[eventType] = []
    }

    this.eventObj[eventType].push(callBack)
  }

  emit (eventType, ...arg) {
    const fns = this.eventObj[eventType]

    if (fns && fns.length > 0) {
      fns.forEach(fn => {
        fn(...arg)
      })
    }
  }

  off (eventType, fn) {
    const fns = this.eventObj[eventType]
    
    if (fn) {
      const index = fns.findIndex(cb => fn === cb)
      index >=0 && fns.splice(index, 1)
    } else {
      this.eventObj[eventType] = []

      delete this.eventObj[eventType]
    }
  }
}