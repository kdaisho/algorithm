// Implement memoize

const add = (a, b) => {
  return a + b
}

function memo(fn) {
  const cache = {}
  return function inner(...args) {
    const key = args.join('-')
    if (cache[key]) {
      return cache[key]
    }

    cache[key] = fn.apply(this, args)
    return cache[key]
  }
}

const res = memo(add)

console.log(res(2, 3)) // calc
console.log(res(2, 3))
console.log(res(2, 4)) // calc
console.log(res(2, 4))
console.log(res(2, 4))
