function isArray (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

function insertSort (arr) {
  if (!isArray(arr)) return

  for (let outer = 1; outer < arr.length; outer++) {
    for (let inner = outer; inner > 0; inner--) {
      if (arr[inner] < arr[inner - 1]) {
        [arr[inner - 1], arr[inner]] = [arr[inner], arr[inner - 1]]
      } else {
        break
      }
    }
  }
}

let arr = [1,2,3,5,9,6,455]

insertSort(arr)

console.log(arr)