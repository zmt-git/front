// 浅拷贝
function shallowCope (o) {
  let newObj = o instanceof Array ? [] : []

  for(let key in o) {
    if (o.hasOwnProperty(key)) {
      newObj[key] = o[key]
    }
  }

  return newObj
}

// 深拷贝
const isObject = (target) => (typeof target === "object" || typeof target === "function") && target !== null;
function deepCopy (o, map = new WeakMap()) {
  if (map.get(o)) return o

  let Constructor = o.constructor

  if (/^(RegExp | Date)$/i.test(Constructor.name)) {
    return new Constructor(o)
  }

  if (isObject(o)) {
    map.set(o[key], key)

    let newObj = o instanceof Array ? [] : []

    for(let key in o) {
      if (o.hasOwnProperty(key)) {
        newObj[key] = deepCopy(o[key])
      }
    }
  } else {
    return o
  }
}


console.log(+new Date())
