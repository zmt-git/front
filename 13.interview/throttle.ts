function throttle (fn: Function, wait: number) {
  let context = this
  let args = arguments

  let per = 0

  return function () {
    let now = +new Date()

    if (now - per > wait) {
      fn.call(context, args)
    }

    per = now
  }
}
