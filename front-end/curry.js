const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

function curry(fn) {
  return function inner(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return function (...args2) {
        return inner(...args, ...args2)
      }
    }
  }
}

const curriedJoin = curry(join)

console.log(curriedJoin(1)(2)(3))
console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(1)(2, 3))
console.log(curriedJoin(1, 2)(3))
