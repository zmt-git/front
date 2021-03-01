// (function () {
//   var i = 1

//   function fn () {
//     function foo () {
//       console.log(this.i)
//     }
//     foo()
//   }

//   fn()
// })()
// ! -----------------
// var a = 20;
// function fn() {
//   function foo() {
//     console.log(this.a);
//   }
//   foo();
// }
// fn();
// ! -----------------
// var a = 20;
// function foo() {
//   var a = 1;
//   var obj = {
//     a: 10,
//     c: this.a + 20,
//     fn: function () {
//       return this.a;
//     }
//   }
//   return obj.c;
// }
// console.log(foo());    // ？
// console.log(window.foo());  // ?
// ! -----------------

// foo = "bar";
// function testThis(){
//   this.foo = 'foo';
// }
// console.log(this.foo);
// new testThis();
// console.log(this.foo);
// console.log(new testThis().foo)//自行尝试

// ! -----------------
let obj = {
  name: "Nealyang",
  func: (a,b) => {
      console.log(this.name,a,b);
  }
};

obj.func(1,2)