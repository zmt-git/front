/**
 * ? Web Worker
 * *Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。
 * *此外，他们可以使用XMLHttpRequest执行 I/O (尽管responseXML和通道属性总是为空)。
 * *一旦创建， 一个worker 可以将消息发送到创建它的JavaScript代码, 通过将消息发布到该代码指定的事件处理程序 (反之亦然)
 * 
 * ? 用途
 * * 懒加载
 * * 文本分析
 * * 流媒体数据处理
 * * canvas 图形绘制
 * * 图像处理
 * 
 * ? 需要注意的点
 * *有同源限制
 * *无法访问 DOM 节点
 * *运行在另一个上下文中，无法使用Window对象
 * *Web Worker 的运行不会影响主线程，但与主线程交互时仍受到主线程单线程的瓶颈制约。
 * *  换言之，如果 Worker 线程频繁与主线程进行交互，主线程由于需要处理交互，仍有可能使页面发生阻塞
 * *共享线程可以被多个浏览上下文（Browsing context）调用，但所有这些浏览上下文必须同源（相同的协议，主机和端口号）
 */
const worker = new Worker('./task.js')

const obj = { a: 1, b: 2 }

worker.onmessage = function (e) {
  console.log('main receive:' + e.data)
  console.log(e.data)
  console.log(e)
}

worker.addEventListener('error', (e, event) => {
  console.log(e.filename)
})

worker.postMessage(obj)

worker.terminate()

var myWorker = new SharedWorker("worker.js")

myWorker.port.start()

myWorker.port.postMessage("hello, I'm main")

myWorker.port.onmessage = function(e) {
  console.log('Message received from worker')
}