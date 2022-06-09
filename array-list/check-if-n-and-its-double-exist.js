/**
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
More formally check if there exists two indices i and j such that:

https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

/------------------------------------
Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
/------------------------------------
Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
/------------------------------------
Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

// inefficient -> O(n^2)
function checkIfExist(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue
      if (arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]) {
        return true
      }
    }
  }
  return false
}

// Usage

const arr = [10, 2, 5, 3]

const _t1 = performance.now()
console.log(checkIfExist(arr)) // true
const _t2 = performance.now()

console.log(_t2 - _t1)
// -------------------------------------------------

// optimized with hashset -> O(n)
function checkIfExist2(arr) {
  let nums = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (nums.has(arr[i])) {
      return true
    }
    nums.add(2 * arr[i])
    nums.add(arr[i] / 2)
  }
  return false
}

// Usage

const arr2 = [10, 2, 5, 3]

const t1 = performance.now()
console.log(checkIfExist2(arr2)) // true
const t2 = performance.now()

console.log(t2 - t1) //50 - 80 times faster
