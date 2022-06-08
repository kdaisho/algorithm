// All Paths From Source to Target

/**
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
 *
 * Input: graph = [[1,2],[3],[3],[]]
 * Output: [[0,1,3],[0,2,3]]
 * Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3
 */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
  const target = graph.length - 1
  results = []

  function backtrack(cur, path) {
    if (cur === target) {
      results.push(path)
      return
    }

    for (const node of graph[cur]) {
      path.push(node)
      backtrack(node, [...path])
      path.pop()
    }
  }
  const path = [0]
  backtrack(0, path)

  return results
}

// Use allPathsSourceTarget
const graph = [[1, 2], [3], [3], []]
console.log(allPathsSourceTarget(graph)) // [[0,1,3],[0,2,3]]

const graph2 = [[4, 3, 1], [3, 2, 4], [3], [4], []]
console.log(allPathsSourceTarget(graph2)) // [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
