/**
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1. After doing so, return the array.
 *
 * https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
 *
 *
------------------------------------------------------------------------------
Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation:
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

------------------------------------------------------------------------------
Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    let _i = i
    let largest = 0

    while (_i + 1 < len) {
      largest = Math.max(largest, arr[_i + 1])
      _i++
    }
    arr.splice(i, 1, i === len - 1 ? -1 : largest)
  }

  return arr
}

// Usage
const arr = [4, 8, 11, 3]
console.log(replaceElements(arr)) //[11,11,11,-1]

const arr2 = [400]
console.log(replaceElements(arr2)) //[-1]

const arr3 = [4, 1]
console.log(replaceElements(arr3)) //[1,-1]
