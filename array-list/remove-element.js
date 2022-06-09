/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
 *
---------------------------------------------------------
  Example 1:

  Input: nums = [3,2,2,3], val = 3
  Output: 2, nums = [2,2,_,_]
  Explanation: Your function should return k = 2, with the first two elements of nums being 2.
  It does not matter what you leave beyond the returned k (hence they are underscores).
---------------------------------------------------------
  Example 2:

  Input: nums = [0,1,2,2,3,0,4,2], val = 2
  Output: 5, nums = [0,1,4,0,3,_,_,_]
  Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
  Note that the five elements can be returned in any order.
  It does not matter what you leave beyond the returned k (hence they are underscores).
 */

// Best answer
function removeElement(nums, val) {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1)
  }
  return nums.length
}

// Usage: best answer

const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const val = 2

console.log(removeElement(nums, val)) // Output: 5
// (mutate) nums = [0,1,3,0,4]

// ------------------------------------------

// inefficient answer
function removeElement__(nums, val) {
  const none = '_'
  let length = nums.length

  nums.forEach((num, i) => {
    if (num === val) {
      nums.splice(i, 1, none)
      length--
    }
  })

  nums.sort((_, b) => {
    if (b === none) {
      return -1
    }
  })

  return length
}

// Usage: inefficient answer

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
const val2 = 2

console.log(removeElement__(nums2, val2)) // Output: 5
// (mutate) [0,1,3,0,4,'_','_','_']
