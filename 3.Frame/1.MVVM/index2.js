class Vue {
  constructor(opt) {
    this._data = opt.data
    this._option = opt
    this._el = opt.el
    this.observe(this._data)
    const el = document.querySelector(`#${this._el}`)
    this.compile(el)
  }

  observe (data) {
    Object.keys(data).forEach(key => {
      let value = data[key]
      const obs = new Observe()
      Object.defineProperty(data, key, {
        get () {
          Observe.target && obs.addNode(Observe.target )
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
    Array.from(el).forEach(child => {
      if (!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
        let key = RegExp.$1.trim()
        child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*' + key + '\\*s\\}\\}', 'gm'), this._data[key])
        Observe.target = child
        this._data[key]
        Observe.target = null
      } else if (child.firstElement ) {
        this.compile(child)
      }
    })
  }
}

class Observe {
  constructor () {
    this.nodes = []
  }

  addNode (node) {
    this.nodes.push(node)
  }

  notify (newVal) {
    this.nodes.forEach(node => {
      node.innerHTML = newVal
    })
  }
}