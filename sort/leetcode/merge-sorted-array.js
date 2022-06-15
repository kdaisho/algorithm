/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m
 * and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array
 * nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the
 * elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has
 * a length of n.
 *
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * Example 1:
 *
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * --------------------------------------------------------
 * Example 2:
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// inefficient: takes 64ms - 111ms
function merge(nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    if (num1[i] === 0 && nums2.length) {
      const popped = num2.shift()
      if (popped !== 0) {
        nums1.splice(i, 1, popped)
      }
    }
  }

  nums1.sort((a, b) => a - b)
}

// efficient: takes 47ms - 98ms
function merge2(nums1, m, nums2, n) {
  const nums1Copy = [...nums1]
  let p1 = 0
  let p2 = 0

  for (let p = 0; p < m + n; p++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[p] = nums1Copy[p1]
      p1++
    } else {
      nums1[p] = nums2[p2]
      p2++
    }
  }
}

// Usage
const arr1 = [1, 2, 3, 0, 0, 0]
const m = 3
const arr2 = [2, 5, 6]
const n = 3

merge2(arr1, m, arr2, n)
console.log(arr1) // [1,2,2,3,5,6]

// --------------------------------------

const _arr1 = [1]
const _m = 1
const _arr2 = []
const _n = 0
merge2(_arr1, _m, _arr2, _n)
console.log(_arr1) // [1]
