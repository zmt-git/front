// 递归的方法
Array.prototype.flat1 = function (arr) {

}

Array.prototype.flatMy = function () {
  return this.toString().split(',').map(item => +item)
}

let arr = [1,[12,[1,1,1]], [123, 123]]

arr = arr.flatMy()

console.log(arr)