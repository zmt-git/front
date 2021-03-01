/**
 * ? 事件循环  Event Loop
 * * javascript的执行机制
 * *浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理
 * 
 * ? Macro-task Task
 *  * setTimeout
 *  * setInterval
 *  * setImmediate
 *  * I/O
 *  * UI rendering
 * 
 *  ? micro-task
 *  * process.nextTick
 *  * promises.then catch finally (有的浏览器将then放入了macro-task队列，有的放入了micro-task 队列)
 *  * Object.observe
 *  * MutationObserver/O
 * 
 * ?同步任务 SyncTask
 * * 同步任务说白了就是主线程来执行的时候立即就能执行的代码
 * 
 * ?异步任务 AsyncTask
 * * 异步任务就是你先去执行别的 task，等我这 xxx 完之后再往 Task Queue 里面塞一个 task 的同步任务来等待被执行
 * 
 */