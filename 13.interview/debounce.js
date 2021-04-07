function debounce (fn, wait) {
  let timeout

  return function () {
    let context = this

    var arg = arguments

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.call(context, arg)
    }, wait)
  }
}

function debounce2 (fn, wait = 500, immediate = true) {
  let timeout, result

  const debounced = function () {
    let context = this

    let args = arguments

    if (timeout) clearTimeout(timeout)

    if (immediate) {
      let callNow = !timeout

      timeout = setTimeout(() => {
        timeout = null
      }, wait)

      if (callNow) result = fn.call(context, args)
    } else {
      timeout = setTimeout(() => {
        fn.call(context, args)
      }, wait)
    }

    return result
  }

  debounced.cancel = function () {
    clearTimeout(timeout)

    timeout = null
  }

  return debounced
}
