/***
 * ? Object.defineProperty
 *  * 1. 在数组中的表现和在对象中的表现是一致的，数组的索引就可以看做是对象中的 key
 *  * 2. 通过 push 或 unshift 会增加索引，对于新增加的属性，需要再手动初始化才能被 observe
 *  * 3. 通过 pop 或 shift 删除元素，会删除并更新索引，也会触发 setter 和 getter 方法。
 * 
 *  ? 优缺点
 *  * 1. Object.defineProperty 只能劫持对象的属性，而 Proxy 是直接代理对象
 *  * 2. Object.defineProperty 对新增属性需要手动进行 Observe。(vm.$set)
 * 
 * 
 * Object.defineProperty 并非不能监控数组下标的变化，Vue2.x 中无法通过数组索引来实现响应式数据的自动更新是 Vue 本身的设计导致的，不是 defineProperty 的锅。
Object.defineProperty 和 Proxy 本质差别是，defineProperty 只能对属性进行劫持，所以出现了需要递归遍历，新增属性需要手动 Observe 的问题。
Proxy 作为新标准，浏览器厂商势必会对其进行持续优化，但它的兼容性也是块硬伤，并且目前还没有完整的 polyfill 方案。
 */