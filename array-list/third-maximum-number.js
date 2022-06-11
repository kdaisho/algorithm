/**
 * Given an integer array nums, return the third distinct maximum number in this array. If the third
 * maximum does not exist, return the maximum number.
 *
 * https://leetcode.com/problems/third-maximum-number/
 *
 * ---------------------------------------------------
 * Example 1:
 *
 * Input: nums = [2,3,1]
 * Output: 1
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2.
 * The third distinct maximum is 1.
 * ---------------------------------------------------
 * Example 2:
 *
 * Input: nums = [2,1]
 * Output: 2
 * Explanation:
 * The first distinct maximum is 2.
 * The second distinct maximum is 1.
 * The third distinct maximum does not exist, so the maximum (2) is returned instead.
 * ---------------------------------------------------
 * Example 3:
 *
 * Input: nums = [2,2,3,1]
 * Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
  const uniques = new Set(nums)
  let largest = 0
  let deleteCount = 0

  largest = Math.max(...uniques)

  if (uniques.size <= 2) {
    return largest
  }

  do {
    uniques.delete(largest)
    largest = Math.max(...uniques)
    deleteCount++
  } while (deleteCount <= 1)

  return largest
}

// Usage

const nums = [2, 3, 1]
console.log(thirdMax(nums)) // 1

const nums2 = [2, 1]
console.log(thirdMax(nums2)) // 2

const nums3 = [2, 2, 3, 1]
console.log(thirdMax(nums3)) // 1
