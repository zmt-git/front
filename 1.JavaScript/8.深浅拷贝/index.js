// ? 浅拷贝

// *浅拷贝就只是复制对象的引用，如果拷贝后的对象发生变化，原对象也会发生变化
// * 1. =

function shallowClone () {
  
}

// ? 深拷贝

// *深拷贝就是对目标的完全拷贝，不像浅拷贝那样只是复制了一层引用，就连值也都复制了。
// *只要进行了深拷贝，它们老死不相往来，谁也不会影响谁
// ! concat 只是对数组的第一层进行深拷贝。
// ! slice 只是对数组的第一层进行深拷贝
// ! Object.assign() 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值
// ! ... 实现的是对象第一层的深拷贝。后面的只是拷贝的引用值。
/**
 * * 利用 JSON 对象中的 parse 和 stringify
 * !undefined、function、symbol 会在转换过程中被忽略
 * 
 * *利用递归来实现每一层都重新创建对象并赋值
 */

function isObject (o) {
  return Object.prototype.toString.call(o) === '[object, Object]'
}

function cloneDeep (source, hash = new WeakMap()) {
  if (!isObject(source)) return

  if (hash.has(source)) return hash.get(source)

  const targetObj = source.constructor === Array ? [] : {}
  
  hash.set(source, targetObj)

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[keys] === 'object') {
        targetObj[keys] = source.constructor === Array ? [] : {}
        targetObj[keys] = cloneDeep(targetObj[keys] )
      } else {
        targetObj[key] = source[keys]
      }
    }
  }

  return targetObj
}
