/**
 * ? 点击劫持
 * ^ 点击劫持是指在一个Web页面中隐藏了一个透明的iframe，用外层假页面诱导用户点击，
 * ^ 实际上是在隐藏的frame上触发了点击事件进行一些用户不知情的操作
 * 
 * ? 攻击流程
 * * 1. 攻击者构建了一个非常有吸引力的网页
 * * 2. 将被攻击的页面放置在当前页面的 iframe 中
 * * 3. 使用样式将 iframe 叠加到非常有吸引力内容的上方
 * * 4. 将iframe设置为100%透明
 * * 5. 你被诱导点击了网页内容，你以为你点击的是***，而实际上，你成功被攻击了。
 * 
 * ? 点击劫持防御
 * * 1. frame busting
 * ^  HTML5中iframe的 sandbox 属性、IE中iframe的security 属性等，都可以限制iframe页面中的JavaScript脚本执行，从而可以使得 frame busting 失效。
 * * 2. X-Frame-Options
 * ^ DENY: 拒绝任何域加载
 * ^SAMEORIGIN: 允许同源域下加载
 * ^ALLOW-FROM: 可以定义允许frame加载的页面地址
 */