function nestedAdd(array) {
  let sum = 0
  for (const item of array) {
    if (Array.isArray(item)) {
      sum += nestedAdd(item)
    } else {
      sum += item
    }
  }

  return sum
}

const nested1 = [1, [2], 3] // 6
const nested2 = [[[[[[[[[5]]]]]]]]] // 5
const nested3 = [10, [12, 14, [1], [16, [20]]], 10, 11] // 94

console.log(nestedAdd(nested1))
