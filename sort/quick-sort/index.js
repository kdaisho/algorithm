function quickSort(nums) {
  // base case, array of length 0 or 1
  if (nums.length <= 1) {
    return nums
  }

  // choose pivot
  const left = []
  const right = []
  const pivot = nums.pop()

  // separate into left and right arrays
  for (const num of nums) {
    if (num < pivot) {
      left.push(num)
    } else {
      right.push(num)
    }
  }

  // call quickSort on left and right arrays
  return quickSort(left).concat(pivot, quickSort(right))
  // return [...quickSort(left), pivot, ...quickSort(right)]
}

const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5]
console.log(quickSort(input)) // [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
