/**
 * Sliding window problem
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one
 * 0.
 *
 * https://leetcode.com/problems/max-consecutive-ones-ii/
 *
 * ----------------------------------------------
 * Example 1:
 *
 * Input: nums = [1,0,1,1,0]
 * Output: 4
 * Explanation: Flip the first zero will get the maximum number of consecutive 1s. After flipping, the maximum
 * number of consecutive 1s is 4.
 * ----------------------------------------------
 * Example 2:
 *
 * Input: nums = [1,0,1,1,0,1]
 * Output: 4
 *
 * ==============================================
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * nums[i] is either 0 or 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  let longest = 0
  let left = 0
  let right = 0
  let zeroes = 0

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroes++
    }

    while (zeroes === 2) {
      if (nums[left] === 0) {
        zeroes--
      }
      left++
    }

    longest = Math.max(longest, right - left + 1)
    right++
  }

  return longest
}

// Usage
const nums = [1, 0, 1, 1, 0]
console.log(findMaxConsecutiveOnes(nums)) // 4

const nums2 = [1, 0, 1, 1, 0, 1, 1]
console.log(findMaxConsecutiveOnes(nums2)) // 5

const nums3 = [1]
console.log(findMaxConsecutiveOnes(nums3)) // 1
