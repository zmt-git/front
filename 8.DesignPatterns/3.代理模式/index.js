// 为一个对象提供一个代用品或占位符，以便控制对它的访问。
// _p图片懒加载 
const myImg = (function () {
  const imgNode = document.createElement('img')

  document.body.appendChild(imgNode)

  return {
    setSrc (src) {
      imgNode.src = src
    }
  }
})()

const proxyObj = (function () {
  const img = new Image()

  img.onload = function () {
    myImg.setSrc(this.src)
  }

  return {
    setSrc (src) {
      myImg.setSrc('./loading.gif')
      setTimeout(() => {
        img.src = src
      }, 2000)
    }
  }
})()

