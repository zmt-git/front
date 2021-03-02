function Mvvm (options) {
  this.$options = options
  this._data = options.data
  initComputed.call(this)
  new Compile(this)
  observer(this._data)

  // 代理
  for (let key in this._data) {
    Object.defineProperty(this, key, {
      configurable: true,

      get () {
        return this._data[key]
      },

      set (newVal) {
        this._data[key] = newVal
      }
    })
  }
}

function observer (val) {
  if (!val && typeof val === 'object') {
    return new Observer(val)
  }
}

function Observer (data) {
  let dep = new Dep()
  for (let key in data) {
    let val = data[key]

    observer(val)

    Object.defineProperty(data, key, {
      configurable: true,

      get () {
        Dep.target && dep.addSub(Dep.target)
        return val
      },

      set (newVal) {
        if (val === newVal) {
          return
        }
        val = newVal
        observer(newVal)
        dep.notify()
      }
    })
  }
}

function replace (fra) {
  Array.from(fra.childNodes).forEach(node => {
    let txt = node.textContent

    let reg = /\{\{(.*?)\}\}/g

    if (node.nodeType === 3 && reg.test(txt)) {
      new Watcher(vm, RegExp.$1, newVal => {
        node.textContent= txt.replace(reg, newVal).trim()
      })
    }

    // v-model
    if (node.nodeType === 1) {
      let nodeAttr = node.attributes
      Array.from(nodeAttr).forEach(attr => {
        let name = attr.name //v-model type
        let exp = attr.value
        if (name.includes('v-')) {
          node.value = vm[exp]
        }
        new Watcher(vm, exp, function (newVal) {
          node.value = newVal
        })

        node.addEventListener('input', e => {
          let newVal = e.target.value
          vm[exp] = newVal
        })
      })
    }

    if (node.childNodes && node.childNodes.length) {
      replace(node)
    }
  })
}

function Compile (vm) {
  vm.$el = document.getElementById(vm.$options.el)

  const fragment = document.createDocumentFragment()

  while (child = vm.$el.firstChild) {
    fragment.appendChild(child)
  }

  replace(fragment)

  vm.$el.appendChild(fragment)
}

function Dep () {
  this.subs = []
}

Dep.prototype = {
  addSub (sub) {
    this.subs.push(sub)
  },
  notify () {
    this.subs.forEach(sub => sub.update())
  }
}

function Watcher (vm, exp, fn) {
  this.fn = fn
  this.vm = vm
  this.exp = exp

  Dep.target = this
  let arr = exp.$1.split('.')
  let val = vm
  arr.forEach(key => {
    val = val[key]
  })

  Dep.target = this
}

Watcher.prototype.update = function () {
  let arr = this.exp.split('.')
  let val = this.vm
  arr.forEach(key => {
    val = val[key]
  })
  this.fn(val)
}


function initComputed () {
  let vm = this
  let computed = this.$options.computed
  Object.keys(computed).forEach(key => {
    Object.defineProperty(vm, key, {
      get: typeof computed[key] === 'function' ? computed[key] : computed[key].get,
      set () {}
    })
  })
}


