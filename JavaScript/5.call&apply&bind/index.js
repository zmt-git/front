// * call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
// ? 模拟call方法
Function.prototype.call2 = function (context) {
  context = context || window

  const fn = Symbol()

  context[fn] = this

  const arg = [].slice.call(arguments, 1)

  const result = context.fn(...arg)

  delete context[fn]

  return result
}
// !apply 类似.区别就是 apply 和 call 传入的第二个参数类型不同
// ? 模拟apply方法
Function.prototype.apply2 = function (context, arr) {
  context = Object(context) || window

  const fn = Symbol()

  context[fn] = this

  let result

  if (!arr) {
    result = context[fn]()
  } else {
    result = context[fn](...arr)
  }

  delete context[fn]

  return result
}
// ! bind 和 call/apply 用处是一样的，但是 bind 会**返回一个新函数！不会立即执行！**而call/apply改变函数的 this 并且立即执行。
// ? 模拟bind方法

Function.prototype.bind2 = function (context) {
  if (typeof this !== 'function') {
    throw new Error(this + 'must be a function')
  }
  const self = this

  const arg = [].slice.call(arguments, 1)

  let bound = function () {
    const boundArg = [].slice.call(arguments)

    const finalArgs = arg.concat(boundArg)

    if (self.prototype) {
      function Empty () {}
      Empty.prototype = self.prototype
      bound.prototype = new Empty()
      const result = self.apply2(this, finalArgs)

      let isObject = typeof result === 'object' && result !== unll

      let isFunction = typeof result === 'function'

      if (isFunction || isObject) {
        return result
      }
      return this
    } else {
      return self.apply2(this, finalArgs)
    }
  }

  return bound
}
