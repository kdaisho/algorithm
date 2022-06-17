/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of
 * the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * Example 1:
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * -----------------------------------------------------
 * Example 2:
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 * -----------------------------------------------------
 * Constraints:
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// [1,3,5] [4,6,8] -> 1,3,4,5,6,8 -> 4.5
// [][1,2,3,4,5] -> 3
function findMedianSortedArrays(nums1, nums2) {
  let arr = []

  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      arr.push(nums1.shift())
    } else {
      arr.push(nums2.shift())
    }
  }

  arr = [...arr, ...nums1, ...nums2]
  const mid = Math.floor(arr.length / 2)

  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2
  } else {
    return arr[mid]
  }
}

// Usage
const nums11 = [1, 3, 5]
const nums12 = [4, 6, 8]
console.log(findMedianSortedArrays(nums11, nums12)) // 4.5

const nums21 = [1, 3]
const nums22 = [2]
console.log(findMedianSortedArrays(nums21, nums22)) // 2

const nums31 = []
const nums32 = [1]
console.log(findMedianSortedArrays(nums31, nums32)) // 1

const nums41 = []
const nums42 = [2, 3]
console.log(findMedianSortedArrays(nums41, nums42)) // 2.5
