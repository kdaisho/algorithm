// Graph - Question: Find if path exists in graph

/**
 * @param {number [][]} edges
 * @param {number} start
 * @param {number} end
 * @returns {boolean}
 */
function validPath(edges, start, end) {
  const adjacencyList = getAdjacencyList(edges)
  const stack = []
  const seen = new Set()
  stack.push(start)

  while (stack.length) {
    const node = stack.pop()

    if (node === end) return true
    if (seen.has(node)) continue
    seen.add(node)

    for (const neighbor of adjacencyList.get(node)) {
      stack.push(neighbor)
    }
  }

  return false
}

function getAdjacencyList(edges) {
  const adjacencyList = new Map()

  for (const [a, b] of edges) {
    if (!adjacencyList.has(a)) adjacencyList.set(a, [])
    if (!adjacencyList.has(b)) adjacencyList.set(b, [])
    adjacencyList.get(a).push(b)
    adjacencyList.get(b).push(a)
  }

  return adjacencyList
}

// Using validPath
const edgesToBeTrue = [
  [0, 1],
  [1, 2],
  [2, 0],
]
const edgesToBeFalse = [
  [0, 1],
  [1, 2],
  [2, 0],
  [3, 4],
]
const start = 0
const end = 2

console.log(validPath(edgesToBeTrue, start, end)) // true
console.log(validPath(edgesToBeFalse, 0, 3)) // false
