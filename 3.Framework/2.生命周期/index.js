/*
 * @Description: 
 * @Version: 1.0
 * @Author: ZMT
 * @Date: 2021-03-03 09:57:27
 * @LastEditors: ZMT
 * @LastEditTime: 2021-05-10 13:48:55
 */
/**
 * ? nextTick
 * ! nextTick
 * ^ 微任务 Promise ---- 不能 ---> 微任务注册微宏任务
 * ^ 宏任务 检测 setImmediate ----- 不能 ----> 降级 MessageChannel ------不能-----> 降级 setTimeout
 */