/*
 * @Description: 模拟new
 * @Version: 1.0
 * @Author: ZMT
 * @Date: 2021-05-07 09:57:07
 * @LastEditors: ZMT
 * @LastEditTime: 2021-05-07 14:56:16
 */
// 创建一个空的简单JavaScript对象（即{}）；
// 链接该对象（设置该对象的constructor）到另一个对象 ；
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。
// @ts-check
function newOperator (cot, ...args) {
  if (typeof cot !== 'function') {
    throw new Error(cot + 'must be a function')
  }

  const newObj = Object.create(cot.prototype)

  const resultCot = cot.apply(newObj, args)

  const isObject = typeof resultCot === 'object' && resultCot !== null
  const isFunction = typeof resultCot === 'function'

  if (isObject || isFunction) {
    return resultCot
  }

  return newObj
}
