// 状态模式
// 状态模式: 将事物内部的每个状态分别封装成类, 内部状态改变会产生不同行为。
// 优点: 用对象代替字符串记录当前状态, 状态易维护
// 缺点: 需编写大量状态类对象.

const WeakLight = function (light) {
  this.light = light
}

WeakLight.prototype.press = function () {
  console.log('打开强光')
  this.light.setState(this.light.strongLight)
}

const StrongLight = function (light) {
  this.light = light
}

StrongLight.prototype.press = function () {
  console.log('关灯')
  this.light.setState(this.light.offLight)
}

const OffLight = function (light) {
  this.light = light
}


OffLight.prototype.press = function () {
  console.log('打开弱光')
  this.light.setState(this.light.weakLight)
}

const Light = function () {
  this.weakLight = new WeakLight(this)
  this.strongLight = new StrongLight(this)
  this.offLight = new OffLight(this)
  this.currentState = this.offLight
}

Light.prototype.init = function (el) {
  const self = this
  el.onclick = function () {
    self.currentState.press()
  }
}


Light.prototype.setState = function (state) {
  this.currentState = state
}