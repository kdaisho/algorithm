/**
 * Binary Search: input has to be sorted array or it won't work
 * @param {Number} id
 * @param {Array<Object>} array
 * @returns {Object | null}
 */
function binarySearch(id, array) {
  let min = 0
  let max = array.length - 1
  let index
  let mid

  while (min <= max) {
    console.count()
    index = Math.floor((min + max) / 2)
    mid = array[index]

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

console.log(binarySearch(23, list)) // { id: 23, name: 'Brian' }
