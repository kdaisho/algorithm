/**
 * If you are calculating complex things or execute time-consuming API calls,
 * you sometimes want to cache the results. In this case we want you to create a function wrapper
 * which takes a function and caches its results depending on the arguments, that were applied
 * to the function.
 */

function cache(fn) {
  const hash = {}

  return function () {
    const args = JSON.stringify(arguments)
    if (!(args in hash)) {
      // hash[args] = fn.apply(null, arguments)
      hash[args] = fn(...arguments)
    }

    return hash[args]
  }
}

const calc = num => {
  console.log('called')
  return num * num
}

const inner = cache(calc)

inner(2) // 'called'
inner(3) // 'called'
inner(4) // 'called'
inner(2)
inner(2)

/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end

  To run the tests, change the `test.skip(…)` below to `test(…)`

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let swapped = false
  do {
    swapped = false
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)

  console.log('Array', nums)
  return nums
}

const exp = bubbleSort([1, 5, 4, 2, 3])

console.log('EXP', exp)

// unit tests
// do not modify the below code
test.skip('bubble sort', function () {
  // const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  // const sortedNums = bubbleSort(nums);
  // expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})
