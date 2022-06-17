/**
 * Given an array of integers nums, sort the array in increasing order based on the frequency of
 * the values. If multiple values have the same frequency, sort them in decreasing order.
 * Return the sorted array.
 *
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/
 *
 * Example 1:
 *
 * Input: nums = [1,1,2,2,2,3]
 * Output: [3,1,1,2,2,2]
 * Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
 * ------------------------------------------------------
 * Example 2:
 *
 * Input: nums = [2,3,1,3,2]
 * Output: [1,3,3,2,2]
 * Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
  const map = new Map()

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  return nums.sort((next, cur) => {
    const val = map.get(next) - map.get(cur)

    if (val === 0) {
      return cur - next
    } else {
      return val
    }
  })
}

// Usage

const nums1 = [1, 1, 2, 2, 2, 3]
console.log(frequencySort(nums1)) // [3,1,1,2,2,2]

const nums2 = [2, 3, 1, 3, 2]
console.log(frequencySort(nums2)) // [1,3,3,2,2]
