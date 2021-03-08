// ? 1. 类型
// * 1.1 unknown
function test (input: unknown): number {
  if (Array.isArray(input)) {
    return input.length
  }
  // return input.length // Error: 这里的input还是unknown类型，静态检查报错。如果入参是any，则会放弃检查直接成功，带来报错风险
}
// * 1.1 void
// void 和 undefined 类型最大的区别是，你可以理解为 undefined 是 void 的一个子集，当你对函数返回值并不在意时，使用 void 而不是 undefined
function f (t: string): void {
  console.log(t)
}
// * 1.2 never
// 是指没法正常结束返回的类型，一个必定会报错或者死循环的函数会返回这样的类型
function foo (): never {
  throw new Error('never')
}
// *1.2.1 永远没有相交的类型
// *1.2.2 不过任何类型联合上 never 类型，还是原来的类型

// ? 2. 运算符

// * 2.1 非空断言运算符 !
// 这个运算符可以用在变量名或者函数名之后，用来强调对应的元素是非 null|undefined 的

// * 2.2 可选链运算符 ?.
// 相比上面!作用于编译阶段的非空判断，?.这个是开发者最需要的运行时(当然编译时也有效)的非空判断
// a?.b ===等价 a === null || a === void 0 ? void 0 : a.b

let a: any

console.log(a?.b)

// * 2.3 空值合并运算符 ??
// ??与||的功能是相似的，区别在于 ??在左侧表达式结果为 null 或者 undefined 时，才会返回右侧表达式 

let b = a ?? 10
// 等价
// let b = a !== null && a !== void 0 ? a : 10;

// * 2.4 数字分隔符_
let num:number = 1_2_345.6_78_9

console.log(num)

// ? 3. 操作符

// * 3.1 键值获取 keyof
//  ! 类型 = keyof 类型
 type Person = {
   name: string;
   age: number;
 }

 type PersonKey = keyof Person
 // keyof 的一个典型用途是限制访问对象的 key 合法化，因为 any 做索引是不被接受的

 function getValue (p: Person, key: keyof Person) {
   return p[key]
 }


// * 3.2 键值获取 typeof
// typeof 是获取一个对象/实例的类型
// typeof 只能用在具体的对象上，这与 js 中的 typeof 是一致的，并且它会根据左侧值自动决定应该执行哪种行为

//  ! 类型 = typeof 实例对象

// * 3.3 遍历属性 in
// in 只能用在类型的定义中，可以对枚举类型进行遍历
// ! [ 自定义变量名 in 枚举类型 ]: 类型

type TypeToNumber<T> = {
  [key in keyof T]: number
}
const obj: TypeToNumber<Person> = { name: 13, age: 12 }

// ? 4 泛型
// * 4.1 基本使用
// ! 如果对一个类型名定义了泛型，那么使用此类型名的时候一定要把泛型类型也写上去
// ! 类型名<泛型列表> 具体类型定义

type Dog<T> = { name: string, type: T }

const dog: Dog<number> = { name: 'huang', type: 1 }

// * 4.2 泛型推导与默认值
type Pig<T = any> = { name: string, type: T }

function adopt<T> (dog: Dog<T>) {
  return dog
}

adopt(dog)

const dog2: Dog<string> = { name: 'a', type: 'a' }

// * 4.3 泛型约束

// 无约束
function fill<T>(length: number, value: T): T[] {
  return new Array(length).fill(value)
}

// 约束
// !泛型名 extends 类型
function sum<T extends number>(value: T[]): number {
  let count = 0
  value.forEach(i => count += i)
  return count
}

function pick<T, U extends keyof T>(){};
// 这里的意思是限制了 U 一定是 T 的 key 类型中的子集，这种用法常常出现在一些泛型工具库中

// * 4.3 泛型条件
// ! 泛型名A extends 类型B ? 类型C: 类型D
// T extends U? X: Y
// 这里便不限制 T 一定要是 U 的子类型，如果是 U 子类型，则将 T 定义为 X 类型，否则定义为 Y 类型

// * 4.3 泛型推断 infer
// infer用来对满足的泛型类型进行子类型的抽取，有很多高级的泛型工具也巧妙的使用了这个方法
type Foo<T> = T extends {t: infer Test} ? Test: string
// 首选看 extends 后面的内容，{t: infer Test}可以看成是一个包含t属性的类型定义，这个t属性的 value 类型通过infer进行推断后会赋值给Test类型，如果泛型实际参数符合{t: infer Test}的定义那么返回的就是Test类型，否则默认给缺省的string类型
type Two = Foo<{t: boolean}>

// ? 5.泛型工具

// * 5.1 Partial<T>
// 此工具的作用就是将泛型中全部属性变为可选的
type PartialEG<T> = {
	[P in keyof T]?: T[P]
}

type Animal = {
  name: string,
  category: string,
  age: number,
  eat: () => number
}

type PartAnimal = Partial<Animal>

// * 5.2 Record<K, T>
// 此工具的作用是将 K 中所有属性值转化为 T 类型，我们常用它来申明一个普通 object 对象
type RecordEG<K extends keyof any,T> = {
  [key in K]: T
}
const obj1: Record<string, string> = { 'name': 'mbg', 'tag': '年轻人不讲武德' }

// * 5.3 Pick<T, K>
// 此工具的作用是将 T 类型中的 K 键列表提取出来，生成新的子键值对类型
type PickEG<T, K extends keyof T> = {
  [P in K]: T[P]
}
// * 5.4 Exclude<T, U>
// 此工具是在 T 类型中，去除 T 类型和 U 类型的交集，返回剩余的部分。

// * 5.5 Omit<T, K>
// 此工具可认为是适用于键值对对象的 Exclude，它会去除类型 T 中包含 K 的键值对。

// * 5.6 ReturnType<T>
// 此工具就是获取 T 类型(函数)对应的返回值类型：

// * 5.6 Required<T>
// 此工具可以将类型 T 中所有的属性变为必选项。


