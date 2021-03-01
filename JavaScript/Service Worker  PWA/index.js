/**
 * ? Service Worker
 * *Service Worker 是一个浏览器背后运行的脚步，独立于 web 页面，为无需一个页面或用户交互的功能打开了大门。
 * *今日，它包含了推送通知和背景异步（push notifications and background sync）的功能。
 * *将来，Service Worker 将支持包括 periodic sync or geofencing 的功能
 * 
 * ?特点
 * *Service Worker 在其自己的全局上下文中运行
 * *它没有绑定到特定的网页
 * *它不能访问到 DOM
 * 
 * ?应用
 * *后台数据同步
 * *响应来自其它源的资源请求，
 * *集中接收计算成本高的数据更新，比如地理位置和陀螺仪信息，这样多个页面就可以利用同一组数据
 * *在客户端进行CoffeeScript，LESS，CJS/AMD等模块编译和依赖管理（用于开发目的）
 * *后台服务钩子
 * *自定义模板用于特定URL模式
 * *性能增强，比如预取用户可能需要的资源，比如相册中的后面数张图片
 * ? PWA Progressive Web App
 * *渐进式网络应用（PWA）是谷歌在2015年底提出的概念。
 * *基本上算是web应用程序，但在外观和感觉上与原生app类似。支持PWA的网站可以提供脱机工作、推送通知和设备硬件访问等功能
 * 
 * ? 特点
 * * Reliable：加载非常迅速，即使在各种不确定的网络情况下也不会展示断网错误页
 * * Fast：响应用户交互非常迅速，动画平滑，操作不会有卡顿
 * * Engaging：拥有类似原生应用的体验
 * 
 * todo https://juejin.cn/post/6844904052166230030#heading-2
 */