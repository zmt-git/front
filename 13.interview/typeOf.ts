function typeOf (o: any): string{
  let result = Object.prototype.toString.call(o).slice(8, -1).toLowerCase()

  return result
}


// test
console.log(typeOf('a'))
console.log(typeOf(1))
console.log(typeOf(undefined))
console.log(typeOf(null))
console.log(typeOf(true))
console.log(typeOf(Symbol()))
console.log(typeOf(() => {}))
console.log(typeOf(new Date()))
console.log(typeOf({}))
console.log(typeOf(new Set()))
