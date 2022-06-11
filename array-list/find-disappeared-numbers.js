/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the
 * integers in the range [1, n] that do not appear in nums.
 *
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * Example 1:
 *
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 * -------------------------------------------
 * Example 2:
 *
 * Input: nums = [1,1]
 * Output: [2]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const missing = []
  const uniques = new Set(nums)

  for (let i = 1; i <= nums.length; i++) {
    if (!uniques.has(i)) {
      missing.push(i)
    }
  }

  return missing
}

// Usage
const nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums)) // [5,6]

const nums2 = [1, 1]
console.log(findDisappearedNumbers(nums2)) // [2]
