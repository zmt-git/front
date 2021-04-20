interface cacheType {
  [key: string]: Function[]
}
class EventEmitter {
  cache: cacheType = {}
  constructor() {
    this.cache = {}
  }

  on (eventName:string, fn: Function) {
    if (!this.cache[eventName]) {
      this.cache[eventName] = []
    }
    this.cache[eventName].push(fn)
  }

  emit (eventName: string, ...arg) {
    if (this.cache[eventName]) {
      let task = this.cache[eventName].slice()

      task.forEach(fn => {
        fn(...arg)
      })
    }
  }

  once (eventName: string, ...arg) {
    if (this.cache[eventName]) {
      let task = this.cache[eventName].slice()

      task.forEach(fn => {
        fn(...arg)
      })

      delete this.cache[eventName]
    }
  }

  off (eventName: string, fn?: Function) {
    let cacheItem = this.cache[eventName]
    if (cacheItem && cacheItem.length > 0) {
      if (fn) {
        let index = cacheItem.findIndex(f => f === fn)
        index > -1 ? cacheItem.splice(index, 1) : null
      } else {
        cacheItem = []
        delete this.cache[eventName]
      }
    }
  }
}