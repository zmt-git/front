// 通过请求第一个条件，会持续执行后续的条件，直到返回结果为止
// _i 在项目中能对 if-else 语句进行优化 

// 场景: 某电商针对已付过定金的用户有优惠政策, 在正式购买后,
// 已经支付过 500 元定金的用户会收到 100 元的优惠券,
// 200 元定金的用户可以收到 50 元优惠券,
// 没有支付过定金的用户只能正常购买。
/**
 * 
 * @param {number} type 1->500 1->200 1->普通
 * @param {boolean} pay true 已支付  false 未支付
 * @param {number} stock 普通库存数量
 */
const order500Command = function (type, pay, stock) {
  if (type === 1 && pay) {
    console.log('定金500 100元优惠劵')
  } else {
    return true
  }
}

const order200Command = function (type, pay, stock) {
  if (type === 2 && pay) {
    console.log('定金200 100元优惠劵')
  } else {
    return true
  }
}

const orderCommand = function (type, pay, stock) {
  if ((type === 3 || !pay) && stock > 0) {
    console.log('普通购买 无优惠劵')
  } else {
    console.log('库存不够, 无法购买')
  }
}

Function.prototype._nextFn = function (fn) {
  const _this = this
  return function () {
    const result = _this.apply(_this, arguments)

    if (result) {
      return fn.apply(_this, arguments)
    }
  }
  
}

const order = order500Command._nextFn(order200Command)._nextFn(orderCommand)

order(2, true, 3)
