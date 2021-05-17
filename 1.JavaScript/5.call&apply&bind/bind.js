/*
 * @Description: 模拟bind
 * @Version: 1.0
 * @Author: ZMT
 * @Date: 2021-05-07 09:56:59
 * @LastEditors: ZMT
 * @LastEditTime: 2021-05-11 09:35:34
 */
// @ts-check
Function.prototype.bind = function (thisArg) {
  if (typeof this !== 'function') {
    throw new Error(this + 'must be a function')
  }

  const self = this

  const args = [].slice.call(arguments, 1)

  const bound = function () {
    const boundArgs = [].slice.call(arguments, 1)

    const finalArgs = args.concat(boundArgs)

    if (new.target) {
      if (self.prototype) {
        function Empty() {}
        Empty.prototype = self.prototype
        bound.prototype = new Empty()
      }
      const result = self.apply(this, finalArgs)
      const isObject = typeof result === 'object' && result !== null
      const isFunction = typeof result === 'function'

      if (isObject || isFunction) {
        return result
      } else {
        return this
      }
    } else {
      return self.apply(thisArg, finalArgs)
    }
  }

  return bound
}
