// (function () {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//       console.log(new Date(), i)
//     }, 1000)
//   }

//   console.log(new Date(), i)
// })()

// ? 5-> 5,5,5,5,5

// ! -----------------------------
// *闭包
// ? 5-> 1,2,3,4,5
// (function () {
//   for (var i = 0; i < 5; i++) {
//     (function (j) {
//       setTimeout(function() {
//         console.log(new Date(), j)
//       }, 1000)
//     })(i)
//   }

//   console.log(new Date(), i)
// })()

// ! -----------------------------
// * setTimeout参数作为回调函数的参数（参数传值为真值）
// (function () {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function(j) {
//       console.log(new Date(), j)
//     }, 1000, i)
//   }

//   console.log(new Date(), i)
// })()

// ! -----------------------------
// * 参数传递是按值传递（Pass by Value）

// function output (i) {
//   setTimeout(function() {
//     console.log(new Date(), i)
//   }, 1000)
// }

// (function () {
//   for (var i = 0; i < 5; i++) {
//     output(i)
//   }

//   console.log(new Date(), i)
// })()

// ! -----------------------------

// *利用let，但是最外层的i会报错

// (function () {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(function(j) {
//       console.log(new Date(), j)
//     }, 1000, i)
//   }

//   console.log(new Date(), i)
// })()

// ! -----------------------------

// ? 0 -> 1 -> 2 -> 3 -> 4 -> 5

// (function () {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function(j) {
//       console.log(new Date(), j)
//     }, 1000 * i, i)
//   }

//   setTimeout(function () {
//     console.log(new Date(), i)
//   }, 1000 * i)
// })()

// ! -----------------------------
// const task = []
// function output (i) {
//   return new Promise(resolve => {
//     setTimeout(function () {
//       console.log(new Date(), i)
//       resolve()
//     }, 1000 * i)
//   })
// }

// (function () {
//   for (var i = 0; i < 5; i++) {
//     task.push(output(i))
//   }

//   Promise.all(task).then(() => {
//     setTimeout(function () {
//       console.log(new Date(), i)
//     }, 1000)
//   })
// })()

// ! -----------------------------
function sleep (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

(async () => {
  for (var i = 0; i < 5; i++) {
    if (i > 0) {
      await sleep(1000)
    }

    console.log(new Date(), i)
  }

  await sleep(1000)
  console.log(new Date(), i)
})()
// ! -----------------------------

