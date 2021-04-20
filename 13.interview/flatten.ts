function flatten(arr: any[]): any[] {
  let result: any[] = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result
}

function flatten2 (arr: any[]): any[] {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}
