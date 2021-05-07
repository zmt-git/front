/**
 * ? 函数对象和普通对象
 * 
 * * 所谓的函数对象，其实就是 JavaScript 的用函数来模拟的类实现
 * ! 所有 Function 的实例都是函数对象，其他的均为普通对象，其中包括 Function 实例的实例
 * 
 * ! JavaScript 中万物皆对象，而对象皆出自构造（构造函数）
 * 
 * ! 首先我们需要明确两点：1️⃣__proto__和constructor是对象独有的。2️⃣prototype属性是函数独有的；
 * 
 * ! 函数也是对象，所以函数也拥有__proto__和 constructor属性
 * 
 * ?__proto__
 * * __proto__是对象所独有的，并且__proto__是一个对象指向另一个对象，也就是他的原型对象。我们也可以理解为父类对象。它的作用就是当你在访问一个对象属性的时候，
 * * 如果该对象内部不存在这个属性，那么就回去它的__proto__属性所指向的对象（父类对象）上查找，如果父类对象依旧不存在这个属性
 * * 那么就回去其父类的__proto__属性所指向的父类的父类上去查找。以此类推，知道找到 null。而这个查找的过程，也就构成了我们常说的原型链。
 * 
 * ? prototype
 * * 给其它对象提供共享属性的对象
 * 
 * ? constructor
 * * 一个对象指向一个函数，这个函数就是该对象的构造函数
 * 
 * ? typeof
 * *一般被用于来判断一个变量的类型。我们可以使用 typeof 来判断number、undefined、symbol、string、function、boolean、object 这七种数据类型
 * * 但是遗憾的是，typeof 在判断 object 类型时候，有些许的尴尬。它并不能明确的告诉你，该 object 属于哪一种 object
 * ! typeof null === 'object'
 * !在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。
 * !由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，
 * !typeof null 也因此返回 "object"。曾有一个 ECMAScript 的修复提案（通过选择性加入的方式），但被拒绝了。该提案会导致 typeof null === 'null'
 * 
 * ? instanceof
 * *instanceof 和 typeof 非常的类似
 * *instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上
 * *与 typeof 方法不同的是，instanceof 方法要求开发者明确地确认对象为某特定类型。
 * 
 * ?new
 * 
 * 
 * ?继承
 * * 1. 类式继承
 * ! 缺点
 * * 1.1.由于子类通过其原型prototype对父类实例化，继承了父类，所以说父类中如果共有属性是引用类型，就会在子类中被所有的实例所共享，
 * *   因此一个子类的实例更改子类原型从父类构造函数中继承的共有属性就会直接影响到其他的子类
 * * 1.2.由于子类实现的继承是靠其原型prototype对父类进行实例化实现的，
 * *   因此在创建父类的时候，是无法向父类传递参数的。因而在实例化父类的时候也无法对父类构造函数内的属性进行初始化
 * 
 * * 2. 构造函数继承
 * ! 缺点
 * * 2.1 由于父类中给this绑定属性，因此子类自然也就继承父类的共有属性。由于这种类型的继承没有涉及到原型prototype，所以父类的原型方法自然不会被子类继承，
 * *  而如果想被子类继承，就必须放到构造函数中，这样创建出来的每一个实例都会单独的拥有一份而不能共用，这样就违背了代码复用的原则，所以综合上述两种，我们提出了组合式继承方法
 * *
 * * 3. 组合式继承
 * ! 缺点
 * * 构造函数执行了两遍就感觉非常的不妥.
 * * 子类不是父类的实例，而子类的原型是父类的实例
 * 
 * * 4. 原型式继承
 * function inheritObject(o) {
    //声明一个过渡对象
    function F() { }
    //过渡对象的原型继承父对象
    F.prototype = o;
    //返回过渡对象的实例，该对象的原型继承了父对象
    return new F();
  }
 * ! 缺点
 * * 与类式继承相同
 * 
 * * 5. 寄生式继承
 * ! 缺点
 * *5.1 寄生式继承就是对原型继承的拓展，一个二次封装的过程，这样新创建的对象不仅仅有父类的属性和方法，还新增了别的属性和方法。
 * 
 * *6. 寄生组合式继承
 * * 寄生式继承和构造函数继承的组合。但是这里寄生式继承有些特殊，这里他处理不是对象，而是类的原型。
* function inheritObject(o) {
    //声明一个过渡对象
    function F() { }
    //过渡对象的原型继承父对象
    F.prototype = o;
    //返回过渡对象的实例，该对象的原型继承了父对象
    return new F();
  }

  function inheritPrototype(subClass,superClass) {
    // 复制一份父类的原型副本到变量中
    var p = inheritObject(superClass.prototype);
    // 修正因为重写子类的原型导致子类的constructor属性被修改
    p.constructor = subClass;
    // 设置子类原型
    subClass.prototype = p;
  }
 */

// 模拟new 方法
function objectFactory() {

  var obj = new Object() // 从Object.prototype上克隆一个对象

  Constructor = [].shift.call(arguments) // 取得外部传入的构造器

  var F = function(){}

  F.prototype= Constructor.prototype

  obj = new F() // 指向正确的原型

  var ret = Constructor.apply(obj, arguments) // 借用外部传入的构造器给obj设置属性

  return typeof ret === 'object' ? ret : obj // 确保构造器总是返回一个对象
}