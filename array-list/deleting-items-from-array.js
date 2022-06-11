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
  return nums.length // or return _i
}

// Usage

const nums = [1, 1, 2]
console.log(removeDuplicates(nums)) // output: 2
// (mutate) nums = [1,2]

const nums2 = [1, 1, 2, 3, 4, 4, 4, 4, 5]
console.log(removeDuplicates(nums2)) // output: 5
// (mutate) nums2 = [1,2,3,4,5]

// Without using hash-set
function removeDuplicates2(nums) {
  let writePointer = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[writePointer] = nums[i]
      writePointer++
    }
  }

  return writePointer
}

// Usage ver 2

const nums3 = [1, 1, 2]
console.log(removeDuplicates(nums3)) // output: 2
