// Implement a function count(), when called it should return how many times it has been called. count.reset() should reset the count

/**
 * count() // 1
 * count() // 2
 * count() // 3
 * count.reset()
 * count() // 1
 */

function count() {
  return ++count.value
}

count.value = 0
count.reset = () => (count.value = 0)

console.log(count()) // 1
console.log(count()) // 2
console.log(count()) // 3
console.log(count.reset()) // 0
console.log(count()) // 1
