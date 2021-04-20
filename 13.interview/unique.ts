function unique<T> (arr: Array<T>): Array<T> {
  let arr2 = arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index
  })

  return arr2
}

function unique2<T> (arr: T[]): T[] {
  return [...new Set(arr)]
}