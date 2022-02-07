// Implement your onw once()

// Solution
function once(fn) {
  let called = false
  let value = null

  return function inner(...args) {
    if (!called) {
      called = true
      value = fn.apply(this, args)
    }
    return value
  }
}

const add = (a, b) => a + b

const addOnce = once(add)

console.log(addOnce(2, 3)) // 5
console.log(addOnce(10, 20)) // 5 (last value)
