function isArray (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

function quickSort (arr) {
  if (!isArray(arr)) return

  if (arr.length <= 1) return arr

  let left = []
  let right = []

  let current = arr.splice(0, 1)

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(current,quickSort(right))
}

let arr = [1,2,35,8,9,6,244,656]

console.log(quickSort(arr))