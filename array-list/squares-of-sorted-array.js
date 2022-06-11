/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each
 * number sorted in non-decreasing order.
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 *
 * Example 1:
 *
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 * -----------------------------------------------------------------
 * Example 2:
 *
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 */

/**
 * @param {number[]} nums
 * @return {number[]} non-decreasing order
 */
// inefficient: time complexity o(n log n) because of sort
function sortedSquares__(nums) {
  const squared = nums.map(num => num * num)
  return squared.sort((a, b) => a - b)
}

// efficient: time complexity o(n) using two-pointer technique
function sortedSquares(nums) {
  let len = nums.length
  let left = 0
  let right = len - 1
  let output = []

  for (let i = 0; i < len; i++) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      output.unshift(nums[left] ** 2)
      left++
    } else {
      output.unshift(nums[right] ** 2)
      right--
    }
  }

  return output
}

// Usage

const nums = [-4, -1, 0, 3, 10]
console.log(sortedSquares(nums)) // [0,1,9,16,100]

const nums2 = [-7, -3, 2, 3, 11]
console.log(sortedSquares(nums2)) // [4,9,9,49,121]
