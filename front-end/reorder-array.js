// Reorder array with new index

const a = ['a', 'b', 'c', 'd']
const b = [1, 3, 0, 2]

// Expect a to be ['c', 'a', 'd', 'b']

function reorder(a, b) {
  return a.reduce((acc, cur, i) => {
    acc[b[i]] = cur
    return acc
  }, [])
}

reorder(a, b)
