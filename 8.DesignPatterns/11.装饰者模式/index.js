// 在不改变对象自身的基础上，在程序运行期间给对象动态地添加方法
// 装饰器模式: 动态地给函数赋能。

Function.prototype.after = function (fn) {
  const self = this
  return function () {
    self.apply(self, arguments)
    return fn.apply(self, arguments)
  }
}

function fn () {
  console.log(123)
}
const wear1 = function () { console.log(1) }
const wear2 = function () { console.log(2) }
const wear3 = function () { console.log(3) }

const wear = wear1.after(wear2).after(wear3)

wear()