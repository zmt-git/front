class Vue {
  constructor (opt) {
    this._data = opt.data
    this._options = opt
    this.observe(opt.data)

    this._el = document.querySelector(opt.el)


    this.compile(this._el)
  }

  observe (data) {
    Object.keys(data).forEach(key => {
      let value = data[key]
      const obs = new Observer()
      Object.defineProperty(data, key, {
        get () {
          Observer.target && obs.addNode(Observer.target)
          return value
        },
        set (newVal) {
          obs.notify(newVal)
          value = newVal
        }
      })
    })
  }

  compile (el) {
    [].forEach.call(el.childNodes,child => {
      if (!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
        const key = RegExp.$1.trim()
        child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'), this._options.data[key])
        Observer.target = child
        this._data[key]
        Observer.target = null
      } else if (child.firstElementChild) {
        compile(child)
      }
    })
  }

}

class Observer {
  constructor () {
    this.nodes = []
  }

  addNode (node) {
    this.nodes.push(node)
  }

  notify (val) {
    this.nodes.forEach(node => {
      node.innerHTML = val
    })
  }
}