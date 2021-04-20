Function.prototype.$call = function (context) {
  const c = context || window

  let fn = Symbol()

  context[fn] = this

  let arg = [].slice.call(arguments, 1)

  let result = context[fn](...arg)

  delete context[fn]

  return result
}

Function.prototype.$apply = function (context, arr) {
  const c = context || window

  let fn = Symbol()

  context[fn] = this

  let result

  if (arr) {
    result = context[fn](...arr)
  } else {
    result = context[fn]()
  }

  delete context[fn]

  return result
}

Function.prototype.$bind = function () {

}
