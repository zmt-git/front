// 单例模式的定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
// 实现的方法为先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。
// _i 使用场景 
// _p 全局缓存, 弹框 
class SingleObj {
  static instance = null
  constructor (name) {
    if (SingleObj.instance) return SingleObj.instance
    this.name = name
    SingleObj.instance = this
  }

  getName () {
    return this.name
  }
}

// eg 弹框模式
class Dialog {
  static instance = null
  constructor () {
    if (Dialog.instance) return Dialog.instance
    this.element = this.createDialogElement()
    this.status = 'none'
    Dialog.instance = this
  }

  createDialogElement () {
    const el = document.createElement('div')
  
    el.classList.add('dialog')
  
    el.style.display = 'none'

    document.body.appendChild(el)
  
    return el
  }

  open () {
    this.element.style.display = 'block'
    this.status = 'block'
  }

  close () {
    this.element.style.display = 'none'
    this.status = 'none'
  }
}