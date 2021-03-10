// 中介者模式的定义：通过一个中介者对象，其他所有的相关对象都通过该中介者对象来通信，
// 而不是相互引用，当其中的一个对象发生改变时，只需要通知中介者对象即可。
// 通过中介者模式可以解除对象与对象之间的紧耦合关系。

// eg 一场测试结束后, 公布结果: 告知解答出题目的人挑战成功, 否则挑战失败。
class PlayerMiddle {
  constructor () {
    this.players = []
    this.winner = []
    this.loser = []
  }

  isFinish () {
    if (this.winner.length + this.loser.length === this.players.length) {
      this.show()
    }
  }

  add (name) {
    this.players.push(name)
  }

  win (name) {
    this.winner.push(name)
    this.isFinish()
  }

  lose (name) {
    this.loser.push(name)
    this.isFinish()
  }

  show () {
    this.winner.forEach(name => {
      console.log(name + '挑战成功')
    })

    this.loser.forEach(name => {
      console.log(name + '挑战失败')
    })
  }
}

const playerMiddle = new PlayerMiddle()

class Player {
  constructor (name) {
    this.name = name
    playerMiddle.add(name)
  }

  win () {
    playerMiddle.win(this.name)
  }

  lose () {
    playerMiddle.lose(this.name)
  }
}

const a = new Player('1')
const b = new Player('2')
const c = new Player('3')

a.win()
b.win()
c.lose()