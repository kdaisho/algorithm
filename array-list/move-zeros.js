/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * --------------------------------------------------------------
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let writePointer = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (nums[writePointer] === 0) {
        const temp = nums[writePointer]
        nums[writePointer] = nums[i]
        nums[i] = temp
      }
      writePointer++
    }
  }
  return nums
}

// Usage

const nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums)) // [1,3,12,0,0]
