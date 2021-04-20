// 能访问到聚合对象的顺序与元素
const integrator = function (arr) {
  let current = 0
  function next () {
    current = current + 1
  }

  function done () {
    return current >= arr.length
  }

  function value () {
    return arr[current]
  }

  return {
    next,
    done,
    value
  }
}

const compare = function(integrator1, integrator2) {
  while (!integrator1.done() && !integrator2.done()) {
    if (integrator1.value() !== integrator2.value()) {
      console.log('不相等')
      return false
    }
    integrator1.next()
    integrator2.next()
  }
  return true
}

let arr1 = [1,2,3]
let arr2= [1,2,3]

console.log(compare(integrator(arr1), integrator(arr2)))