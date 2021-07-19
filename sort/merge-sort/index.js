const mergeSort = nums => {
  const mid = Math.floor(nums.length / 2)
  if (nums.length <= 1) {
    // cannot sort anymore as array contains only one value e.g.[3]
    // so return it
    return nums
  }

  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  // while (left.length) {
  //   result.push(left.shift())
  // }

  // while (right.length) {
  //   result.push(right.shift())
  // }

  return [...result, ...left, ...right]
}

const nums1 = [3, 2, 5, 1, 4]
const nums2 = [9, 2, 5, 10, 8, 3, 6, 4, 1, 7]

console.log(mergeSort(nums1)) // [1, 2, 3, 4, 5]
console.log(mergeSort(nums2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
