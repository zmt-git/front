/*
 * @Description: apply模拟
 * @Version: 1.0
 * @Author: ZMT
 * @Date: 2021-05-07 09:56:53
 * @LastEditors: ZMT
 * @LastEditTime: 2021-05-07 10:20:54
 */
// @ts-check
Function.prototype.apply = function (context, arg) {
  const c = context || window

  const fn = Symbol()

  c[fn] = this

  let result

  if (arg) {
    result = c[fn]()
  } else {
    result = c[fn](...arg)
  }

  delete c[fn]

  return result
}