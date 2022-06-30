/**
 * Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

Players take turns placing characters into empty squares ' '.
The first player A always places 'X' characters, while the second player B always places 'O' characters.
'X' and 'O' characters are always placed into empty squares, never on filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

Example 1:

Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
-----------------------------------------------
Example 2:

Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
Output: "B"
-----------------------------------------------
Example 3:

Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
Output: "Draw"
 */

/**
 * @param {number[][]} moves
 * @return {string}
 */
function ticTacToe(moves) {
  const n = 3
  const board = Array(3)
    .fill(0)
    .map(_ => Array(3).fill(0)) // [[0,0,0],[0,0,0],[0,0,0]]
  let player = 1

  for (const move of moves) {
    const row = move[0]
    const col = move[1]
    board[row][col] = player

    if (
      checkRow(row, player) ||
      checkCol(col, player) ||
      (row === col && checkDiagonal(player)) ||
      (row + col === n - 1 && checkAntiDiagonal(player))
    ) {
      return player === 1 ? 'A' : 'B'
    }

    player *= -1 // toggles player between 1 and -1
  }

  return moves.length === n * n ? 'Draw' : 'Pending'

  function checkRow(row, player) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] !== player) return false
    }
    return true
  }

  function checkCol(col, player) {
    for (let row = 0; row < n; row++) {
      if (board[row][col] !== player) return false
    }
    return true
  }

  function checkDiagonal(player) {
    for (let row = 0; row < n; row++) {
      if (board[row][row] !== player) return false
    }
    return true
  }

  function checkAntiDiagonal(player) {
    for (let row = 0; row < n; row++) {
      if (board[row][n - 1 - row] !== player) return false
    }
    return true
  }
}

// Usage
const moves1 = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
]
console.log(ticTacToe(moves1)) // A

const moves2 = [
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
]
console.log(ticTacToe(moves2)) // B

const moves3 = [
  [0, 0],
  [1, 1],
  [2, 0],
  [1, 0],
  [1, 2],
  [2, 1],
  [0, 1],
  [0, 2],
  [2, 2],
]
console.log(ticTacToe(moves3)) // Draw
