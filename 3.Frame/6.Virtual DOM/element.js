class Element {
  constructor (type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

function createElement (type, props, children) {
  return new Element(type, props, children)
}

function render (virtualDom) {
  const el = document.createElement(virtualDom.type)

  for(let key in virtualDom.props) {
    setAttr(el, key, virtualDom.props[key])
  }

  virtualDom.children.forEach(child => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child)
    el.appendChild(child)
  })

  return el
}

function setAttr (el, key, value) {
  switch (key) {
    case 'value' :
      if (el.tagName.toLowerCase() === 'input'
      || el.tagName.toLowerCase() === 'textarea') {
        el.value = value
      } else {
        el.setAttribute(key, value)
      }
      break;
    case 'style': Node.style.cssText = value
      break;
    default: el.setAttribute(key, value)
  }
}

function renderDom (el, target) {
  target.appendChild(el)
}

export { Element, createElement, render, renderDom, setAttr }