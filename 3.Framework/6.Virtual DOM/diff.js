function diff (oldTree, newTree) {
  let patches = {}
  let index = 0
  walk(oldTree, newTree, index, patches)
  return patches
}

function walk (oldNode, newNode, index, patches) {
  let current = []

  if (!newNode) {
    current.push({ type: 'REMOVE', index })
  } else if (isString(oldNode) && isString(newNode)) {
    // 文本
    if (oldNode !== newNode) {
      current.push({ type: 'TEXT', text: newNode })
    }
  } else if (oldNode.type === newNode.type) {
    // 比较属性
    let attr = diffAttr(oldNode.props, newNode.props)
    if (Object.keys(attr).length > 0) {
      current.push({ type: 'ATTR', attr })
    }
    diffChildren(oldNode.children, newNode.children, patches)
  } else {
    current.push({ type: 'REPLACE', newNode })
  }

  if (current.length) {
    patches[index] = current
  }
}

function diffAttr (oldAttr, newAttr) {
  let patch = {}

  for (let key in oldAttr) {
    if (oldAttr[key] !== newAttr[key]) {
      patch[key] = newAttr[key]
    }
  }

  for (let key in newAttr) {
    if (!oldAttr.hasOwnProperty(key)) {
      patch[key] = newAttr[key]
    }
  }

  return patch
}
let num = 0
function diffChildren (oldChildren, newChildren, patches) {
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patches)
  })
}

function isString (str) {
  return typeof str === 'string'
}

export { diff }