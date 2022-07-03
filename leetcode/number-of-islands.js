/**
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

https://leetcode.com/problems/number-of-islands/

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
----------------------------------------------
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 */

/**
 * @param { string[][]} grid
 * @return { number }
 */
function numIslands(grid) {
  if (grid === null || grid.length === 0) {
    return 0
  }

  let islands = 0

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        islands++
        dfs(grid, r, c)
      }
    }
  }

  return islands
}

function dfs(grid, r, c) {
  if (
    r < 0 ||
    c < 0 ||
    r >= grid.length ||
    c >= grid[0].length ||
    grid[r][c] === '0'
  ) {
    return
  }

  grid[r][c] = '0'
  dfs(grid, r - 1, c)
  dfs(grid, r + 1, c)
  dfs(grid, r, c - 1)
  dfs(grid, r, c + 1)
}

// Usage
const grid1 = [
  ['1', '0'],
  ['0', '1'],
]
console.log(numIslands(grid1)) // 2

const grid2 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]
console.log(numIslands(grid2)) // 1

const grid3 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]
console.log(numIslands(grid3)) // 3
