// 应用场景:
// 场景一: 当观察的数据对象发生变化时, 自动调用相应函数。比如 vue 的双向绑定;
// 场景二: 每当调用对象里的某个方法时, 就会调用相应'访问'逻辑。比如给测试框架赋能的 spy 函数;
class Observe {
  constructor(data) {
    this._data = data

    this.observer(data)
  }

  observer (data) {
    Object.keys(data).forEach(key => {
      let val = data[key]
      Object.defineProperty(data, key, {
        get () {
          return val
        },
        set (newVa) {
          val = newVa
        }
      })
    })
  }
}