/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
  const length = arr.length
  let skip = false

  for (let i = 0; i < arr.length; i++) {
    if (i >= length) break

    if (skip) {
      skip = false
      continue
    }

    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      skip = true
    }
  }

  arr.splice(length)
}

const array = [0, 0, 1, 1]
duplicateZeros(array)

console.log(array)
