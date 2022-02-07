// Implement your own chunk(arr: any[], size: number)

// chunk([1,2,3,4,5], 1) // [[1], [2], [3], [4], [5]]
// chunk([1,2,3,4,5], 2) // [[1, 2], [3, 4], [5]]

// Solution
function chunk(list, size) {
  const output = []
  while (list.length) {
    output.push(list.splice(0, size))
  }
  return output
}

console.log(chunk([1, 2, 3, 4, 5], 1)) // [[1], [2], [3], [4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 2)) // [[1, 2], [3, 4], [5]]
console.log(chunk([], 3)) // []
console.log(chunk([1, 2, 3, 4, 5], 6)) // [[1, 2, 3, 4, 5]]
