/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may
 * not be used more than once.
 *
 * https://leetcode.com/problems/word-search/
 *
 * Example 1:
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 * -----------------------------------------------------------
 * Example 2:
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 * -----------------------------------------------------------
 * Example 3:
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 *
 * Constraints:
 *
 * m == board.length
 * n = board[i].length
 * 1 <= m, n <= 6
 * 1 <= word.length <= 15
 * board and word consists of only lowercase and uppercase English letters.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const ROWS = board.length
  const COLS = board[0].length

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (backtrack(row, col, word, 0, board, ROWS, COLS)) {
        return true
      }
    }
  }
  return false
}

function backtrack(row, col, word, index, board, ROWS, COLS) {
  // step 1). check the bottom case.
  if (index >= word.length) return true

  // step 2). check the boundaries.
  if (
    row < 0 ||
    row >= ROWS ||
    col < 0 ||
    col >= COLS ||
    board[row][col] !== word.charAt(index)
  ) {
    return false
  }

  // step 3). explore the neighbors in DFS.
  // mark the path before the next exploration.
  board[row][col] = '#'

  const rowOffsets = [0, 1, 0, -1]
  const colOffsets = [1, 0, -1, 0]

  for (let i = 0; i < 4; i++) {
    if (
      backtrack(
        row + rowOffsets[i],
        col + colOffsets[i],
        word,
        index + 1,
        board,
        ROWS,
        COLS
      )
    ) {
      return true
    }
  }

  // step 4). clean up and return the result.
  board[row][col] = word.charAt(index)
  return false
}

// Usage
const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]

const word1 = 'ABCCED'
const board1 = JSON.parse(JSON.stringify(board))
console.log(exist(board1, word1)) // true

const word2 = 'SEE'
const board2 = JSON.parse(JSON.stringify(board))
console.log(exist(board2, word2)) // true

const word3 = 'ABCB'
const board3 = JSON.parse(JSON.stringify(board))
console.log(exist(board3, word3)) // false
