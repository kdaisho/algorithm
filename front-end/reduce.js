// Implement Array.prototype.reduce

// Make this line work
// [1, 2, 3].myReduce((acc, cur) => acc + cur)

Array.prototype.myReduce = function (cb, initialValue) {
  if (!initialValue) {
    initialValue = 0
  }

  let res
  for (const item of this) {
    res = cb(initialValue, item)
    // console.log(res)
  }

  return res
}

const arr = [1, 2, 3]

const initial = []

Array.prototype.myReduce = function (cb, initialValue) {
  if (typeof cb !== 'function') {
    throw new Error(`${cb} is not a function`)
  }

  const isInitialValueDefined = arguments.length > 1

  if (!this.length && !isInitialValueDefined) {
    throw new Error()
  }

  let value = isInitialValueDefined ? initialValue : this[0]
  let i = isInitialValueDefined ? 0 : 1
  for (; i < this.length; i++) {
    value = cb(value, this[i], i, this)
  }
  return value
}

const result = arr.myReduce((sum, cur) => sum + cur, '')
console.log(result)
