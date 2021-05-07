/*
 * @Description: 模拟call
 * @Version: 1.0
 * @Author: ZMT
 * @Date: 2021-05-07 09:56:46
 * @LastEditors: ZMT
 * @LastEditTime: 2021-05-07 10:19:20
 */
// @ts-check
Function.prototype.call = function (context) {
  const c = context || window

  const fn = Symbol()

  c[fn] = this

  const arg = [].slice.call(arguments, 1)

  const result = c[fn](...arg)

  delete c[fn]

  return result
}