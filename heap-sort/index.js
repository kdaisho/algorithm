const heapSort = array => {
  const _array = createMaxHeap(array)
  for (let i = _array.length - 1; i > 0; i--) {
    swapPlace(0, i, _array)
    heapify(_array, 0, i)
  }
  return _array
}

const swapPlace = (index1, index2, array) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
  return array
}

const createMaxHeap = array => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length)
  }
  return array
}

const heapify = (array, index, heapSize) => {
  const left = 2 * index + 1
  const right = 2 * index + 2

  let largestValueIndex = index

  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left
  }

  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right
  }

  if (largestValueIndex !== index) {
    const _array = swapPlace(index, largestValueIndex, array)
    heapify(_array, largestValueIndex, heapSize)
  }
}

// unit tests
const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1]
heapSort(nums)
console.log('after heap sort', nums) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
