// Implement Array.prototype.flat()

const array = [1, [2], [3, [4]]]
const result = []

function flat(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      flat(item)
    } else {
      result.push(item)
    }
  }
  return result
}

console.log(flat(array))
