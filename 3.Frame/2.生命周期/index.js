/**
 * ? nextTick
 * ! nextTick
 * ^ 宏任务 检测 setImmediate ----- 不能 ----> 降级 MessageChannel ------不能-----> 降级 setTimeout
 * ^ 微任务 Promise ---- 不能 ---> 微任务注册微宏任务
 */