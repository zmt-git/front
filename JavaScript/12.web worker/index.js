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