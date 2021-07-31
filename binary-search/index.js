/**
 * Binary Search: input has to be sorted array or it won't work
 * @param {Number} id
 * @param {Array<Object>} array
 * @returns {Object | null}
 */
function binarySearch(id, array) {
  let min = 0
  let max = array.length - 1

  /**
   * don't know why but declaring const within while loop seems to be valid
   */
  while (min <= max) {
    const index = Math.floor((min + max) / 2)
    const mid = array[index]

    if (mid.id < id) {
      min = index + 1
    } else if (mid.id > id) {
      max = index - 1
    } else {
      return mid
    }
  }

  return null
}

const list = [
  { id: 1, name: 'Sam' },
  { id: 3, name: 'Sarah' },
  { id: 5, name: 'John' },
  { id: 6, name: 'Burke' },
  { id: 10, name: 'Simona' },
  { id: 12, name: 'Asim' },
  { id: 13, name: 'Niki' },
  { id: 15, name: 'Aysegul' },
  { id: 17, name: 'Kyle' },
  { id: 18, name: 'Jem' },
  { id: 19, name: 'Marc' },
  { id: 21, name: 'Chris' },
  { id: 23, name: 'Brian' },
  { id: 24, name: 'Ben' },
]

console.log(binarySearch(15, list)) // { id: 15, name: 'Aysegul' }
