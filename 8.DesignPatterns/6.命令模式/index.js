// 命令模式与策略模式有些类似, 在 JavaScript 中它们都是隐式的。

function setCommand (el, command) {
  el.onclick = () => {
    command.execute()
  }
}

const menu = {
  execute () {
    console.log(12313)
  }
}

