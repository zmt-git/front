// 全局上下文
//   无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象。
// 函数上下文
//   在函数内部，this的值取决于函数被调用的方式。
// 类上下文
//   this 在 类 中的表现与在函数中类似，因为类本质上也是函数，但也有一些区别和注意事项。
//   类的构造函数中，this 是一个常规对象。类中所有非静态的方法都会被添加到 this 的原型中
// 派生类
//   不像基类的构造函数，派生类的构造函数没有初始的 this 绑定  super()
//   在调用 super() 之前引用 this 会抛出错误
// 原型链中的 this
//   如果该方法存在于一个对象的原型链上，那么 this 指向的是调用这个方法的对象，就像该方法就在这个对象上一样。
//   用作 getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象
// 作为构造函数
//   this被绑定到正在构造的新对象
// 作为一个DOM事件处理函数
//   当函数被用作事件处理函数时，它的 this 指向触发事件的元素（一些浏览器在使用非 addEventListener 的函数动态地添加监听函数时不遵守这个约定）
// 作为一个内联事件处理函数
//   它的this指向监听器所在的DOM元素：
// 类中的this
//   方法中的 this 值取决于它们如何被调用。
//   有时，改写这个行为，让类中的 this 值总是指向这个类实例会很有用
//   类内部总是严格模式。调用一个 this 值为 undefined 的方法会抛出错误