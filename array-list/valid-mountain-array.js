/**
 * Given an array of integers arr, return true if and only if it is a valid mountain array.
 *
 * https://leetcode.com/problems/valid-mountain-array/
 *
--------------------------------------------------
Example 1:

Input: arr = [2,1]
Output: false
--------------------------------------------------
Example 2:

Input: arr = [3,5,5]
Output: false
--------------------------------------------------
Example 3:

Input: arr = [0,3,2,1]
Output: true
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function validMountainArray(arr) {
  if (arr.length <= 2) return false
  const trail = {
    up: null,
    down: null,
    prev: arr[0],
  }

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    if (trail.prev === cur) return false

    if (trail.prev < cur) {
      trail.up = true
    } else {
      trail.down = true
    }

    if (trail.down && trail.prev < cur) {
      return false
    }
    trail.prev = cur
  }

  if (trail.up && trail.down) {
    return true
  } else {
    return false
  }
}

// Usage

const arr = [0, 3, 2, 1]
console.log(validMountainArray(arr)) // true

// this is cleaner than one above, but the same performance
function validMountainArray2(arr) {
  const len = arr.length
  let i = 0

  // walk up
  while (i + 1 < len && arr[i] < arr[i + 1]) {
    i++
  }

  if (i === 0 || i === len - 1) {
    return false
  }

  //walk down
  while (i + 1 < len && arr[i] > arr[i + 1]) {
    i++
  }

  return i === len - 1
}

// Usage

const arr2 = [0, 3, 2, 1]
console.log(validMountainArray2(arr2)) // true
