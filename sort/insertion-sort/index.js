function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]
    let j

    for (j = i - 1; nums[j] > numberToInsert; j--) {
      nums[j + 1] = nums[j]
    }
    nums[j + 1] = numberToInsert
  }

  return nums
}

const arr = [3, 1, 2, 5, 4]
const result = insertionSort(arr)

console.log('Result:', result) // [1, 2, 3, 4, 5]
