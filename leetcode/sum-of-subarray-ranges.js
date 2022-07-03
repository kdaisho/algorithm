/**
You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.

Return the sum of all subarray ranges of nums.

A subarray is a contiguous non-empty sequence of elements within an array.

https://leetcode.com/problems/sum-of-subarray-ranges/

Example 1:

Input: nums = [1,2,3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0
[2], range = 2 - 2 = 0
[3], range = 3 - 3 = 0
[1,2], range = 2 - 1 = 1
[2,3], range = 3 - 2 = 1
[1,2,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.
----------------------------------------------------------
Example 2:

Input: nums = [1,3,3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0
[3], range = 3 - 3 = 0
[3], range = 3 - 3 = 0
[1,3], range = 3 - 1 = 2
[3,3], range = 3 - 3 = 0
[1,3,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.
----------------------------------------------------------
Example 3:

Input: nums = [4,-2,-3,4,1]
Output: 59
Explanation: The sum of all subarray ranges of nums is 59.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function subArrayRanges(nums) {
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    let max = -Infinity
    let min = Infinity

    for (let j = i; j < nums.length; j++) {
      min = Math.min(min, nums[j])
      max = Math.max(max, nums[j])
      sum += max - min
    }
  }

  return sum
}

// Usage

const nums1 = [1, 2, 3]
console.log(subArrayRanges(nums1)) // 4

const nums2 = [1, 3, 3]
console.log(subArrayRanges(nums2)) // 4

const nums3 = [4, -2, -3, 4, 1]
console.log(subArrayRanges(nums3)) // 59

// not optimal solution, but easy to read
function _subArrayRanges(nums) {
  let len = 1
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const end = i + j + len
      if (end > nums.length) break
      const sliced = nums.slice(j, end)
      sum += sliced.length ? getRange(sliced) : 0
    }
  }

  return sum
}

function getRange(arr) {
  if (arr.length === 1) return 0
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  return max - min
}

// Usage

const _nums1 = [1, 2, 3]
console.log(_subArrayRanges(_nums1)) // 4

const _nums2 = [1, 3, 3]
console.log(_subArrayRanges(_nums2)) // 4

const _nums3 = [4, -2, -3, 4, 1]
console.log(_subArrayRanges(_nums3)) // 59
