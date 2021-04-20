// 继承
// 1. 组合继承
function Animal (name) {
  this.name = name
}
Animal.prototype.getName = function () {
  return this.name
}

function Dog (name, type) {
  Animal.call(this, name)
  this.type = type
}

Dog.prototype = new Animal()

Dog.prototype.constructor = Dog

Dog.prototype.getType = function () {
  return this.getType
}

// 寄生组合继承
function object (o) {
  function F ()

  F.prototype = o

  return new F()
}

function inheritFunction (child, parent) {
  let p = object(parent.prototype)

  p.constructor = child

  child.prototype = p
}

