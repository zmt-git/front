// 定义: 在继承的基础上, 在父类中定义好执行的算法。
class Drinks {
  constructor () {
    this.init()
  }
  init () {
    this.firstStep()
    this.secondStep()
    this.thirdStep()
    this.fourthStep()
  }
  firstStep () {
    console.log('1')
  }
  secondStep () {
    console.log('2')
  }
  thirdStep () {
    console.log('3')
  }
  fourthStep () {
    console.log('4')
  }
}

class Tea extends Drinks {
  constructor(prop) {
    super(prop)
  }
  secondStep () {
    console.log('tea 2')
  }
}

class Coffee extends Drinks {
  constructor(prop) {
    super(prop)
  }
  secondStep () {
    console.log('Coffee 2')
  }
}

const tea = new Tea()
const coffee = new Coffee()