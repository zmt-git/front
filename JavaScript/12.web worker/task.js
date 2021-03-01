console.log('WORKER TASK: ', 'running')

onmessage = function (e) {
  console.log('task receive:')
  console.log(e.data)

  e.data.b = 3

  postMessage(e.data)
}

self.close()

importScripts('./task1')
importScripts('./task2')