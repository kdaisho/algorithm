/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 */
// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

/**
Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
----------------------------------------
Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  const seen = new Set()
  let _i = 0

  nums.forEach(n => {
    if (!seen.has(n)) {
      nums[_i] = n
      _i++
    }
    seen.add(n)
  })

  nums.splice(_i)
  return nums.length
}

// Usage

const nums = [1, 1, 2]
console.log(removeDuplicates(nums)) // output: 2
// (mutate) nums = [1,2]

const nums2 = [1, 1, 2, 3, 4, 4, 4, 4, 5]
console.log(removeDuplicates(nums2)) // output: 5
// (mutate) nums2 = [1,2,3,4,5]
