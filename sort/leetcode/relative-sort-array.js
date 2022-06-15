/**
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also
 * in arr1.
 * Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
 * Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
 *
 * https://leetcode.com/problems/relative-sort-array/
 *
 * -------------------------------------------------------------
 * Example 1:
 *
 * Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * Output: [2,2,2,1,4,3,3,9,6,7,19]
 * -------------------------------------------------------------
 * Example 2:
 *
 * Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
 * Output: [22,28,8,6,17,44]
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const map = new Map()
  const N = arr2.length

  arr2.forEach((num, i) => {
    map.set(num, i)
  })

  return arr1.sort((a, b) => {
    a = map.has(a) ? map.get(a) : N + a
    b = map.has(b) ? map.get(b) : N + b

    return a - b
  })
}

// Usage

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
const arr2 = [2, 1, 4, 3, 9, 6]

console.log(relativeSortArray(arr1, arr2)) //[2,2,2,1,4,3,3,9,6,7,19]

const arr10 = [26, 21, 11, 20, 50, 34, 1, 18]
const arr20 = [21, 11, 26, 20]

console.log(relativeSortArray(arr10, arr20)) //[21,11,26,20,1,18,34,50]
