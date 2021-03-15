function isArray (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

function selectSort (arr) {
  if (!isArray(arr)) return

  const len = arr.length

  for (let outer = 0; outer < len - 1; outer ++) {
    for (let inner = outer; inner < len; inner ++) {
      if (arr[outer] > arr[inner]) {
        [arr[outer], arr[inner]] =  [arr[inner], arr[outer]]
      }
    }
  }
}

selectSort(arr)

console.log(arr)