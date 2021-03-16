function isArray (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

export default isArray