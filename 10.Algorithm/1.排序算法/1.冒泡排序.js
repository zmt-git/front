function isArray (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}
function bubbleSort (arr) {
  if (!isArray(arr)) return

  const len = arr.length

  for (let outer = len; outer > 1; outer--) {
    for (let inner = 0; inner < outer; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
      }
    }
  }
}

let arr = [0.1, 2,5,6,3,98, 9999999, '你好', "ac", 'ab']

bubbleSort(arr)

console.log(arr)