Array.prototype.$forEach = function (callback, thisArg) {
  if (this === null) {
    throw new Error('this is null or not defined')
  }

  if (typeof callback !== 'function') {
    throw new Error(callback + 'is not a function')
  }

  let o = Object(this)

  console.log(o)

  let len = o.length >>> 0

  let k = 0

  while (k < len) {
    if (k in o) {
      callback.call(thisArg, o[k], k, o)
    }
    k++
  }
}

Array.prototype.$map = function (callback, thisArg) {
  if (this === null) {
    throw new Error('this is null or not defined')
  }

  if (typeof callback !== 'function') {
    throw new Error(callback + 'is not a function')
  }

  let o = Object(this)

  let len = o.length >>> 0

  let key = 0, res = []

  while (key < len) {
    if (k in o) {
      res[key] = callback.call(thisArg, o[k], k, o)
    }
    k++
  }

  return res
}

Array.prototype.$filter = function (callback, thisArg) {
  if (this === null) {
    throw new Error('this is null or not defined')
  }

  if (typeof callback !== 'function') {
    throw new Error(callback + 'is not function')
  }

  let o = Object(this)

  let len = o.length >>> 0

  let k = 0, res = []

  while(k < len) {
    if (k in o) {
      if (callback.call(thisArg, o[k], k, o)) {
        res.push(o[k])
      }
    }
    k++
  }

  return res
}

Array.prototype.$some = function (callback, thisArg) {
  if (this === null) {
    throw new Error('this is null or not defined')
  }

  if (typeof callback !== 'function') {
    throw new Error(callback + 'is not function')
  }

  let o = Object(this)

  let len = o.length >>> 0

  let k = 0

  while (k < len) {
    if (k in o) {
      if (callback.call(thisArg, o[k], k, o)) {
        return true
      }
    }
  }

  return false
}

Array.prototype.$reduce = function (callback, initialValue) {
  if (this === null) {
    throw new Error('this is null or not defined')
  }

  if (typeof callback !== 'function') {
    throw new Error(callback + 'is not function')
  }

  let o = Object(this)

  let len = o.length >>> 0

  let k = 0, acc

  if (arguments.length > 1) {
    acc = initialValue
  } else {
    while (k < len && !(k in o)) {
      k++
    }

    if (k > len) {
      throw new Error('Reduce of empty array with no initial value')
    }

    acc = o[k++]
  }

  while (k < len) {
    if (k in o) {
      acc = callback(acc, o[k], k, o)
    }
  }

  return acc
}


