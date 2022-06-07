/**
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(edges, source, destination) {
  const graph = createGraph(edges)
  const visited = new Set()
  return traverseGraph(graph, source, destination, visited)
}

function createGraph(edges) {
  const adjacencyList = {}

  for (const [a, b] of edges) {
    if (!adjacencyList[a]) adjacencyList[a] = []
    if (!adjacencyList[b]) adjacencyList[b] = []
    adjacencyList[a].push(b)
    adjacencyList[b].push(a)
  }

  return adjacencyList
}

function traverseGraph(graph, vertex, dst, visited) {
  if (vertex === dst) return true
  if (visited.has(vertex)) return false
  visited.add(vertex)

  for (const node of graph[vertex]) {
    if (traverseGraph(graph, node, dst, visited)) {
      return true
    }
  }

  return false
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
