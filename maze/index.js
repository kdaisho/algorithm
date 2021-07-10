/**
create a function that accepts two parameters: an empty maze and a starting coordinate
the maze will be an array of arrays of objects. the objects will look like:
{
  "n": true,
  "e": true,
  "s": true,
  "w": true,
  "visited": false
}

the outer array (that contains arrays) represents the y axis. the inner arrays (that contains
objects) are represent the x axis. maze[y][x]

the starting coordinates will be a pair, an array of two numbers, [x, y]. the first
number will be the x position and the second will be the y position

generateMaze will return the same maze (you can operate on the parameter itself)

a function called randomizeDirection is globally available. it will return to you an array of
['n', 'e', 's', 'w'] in random order. in order to be able unit test this, these return values
are pre-determined. if you want to have a truly random return, call setOrder(null) (another
globally available function.) if you call it too frequently to pass the unit test, you'll see an
error in the console.

it will also attempt to draw your maze as you write your algorithm. you'll see two lines for each
cell since neighbors each has its own walls. writeMaze assumes your data is well formatted . if you
have unvisited cells, they'll be highlighted in red

if you'd like to see the utilities functions, they're kept in this CodePen:
https:codepen.io/btholt/pen/bLEryO?editors=0010

I highly suggest you work on one unit test at a time. Mark the others `xit('...', () => ...)` instead of
`it('...', () => ...)` so they won't run.

Maze (5x5)
[
  [{…}, {…}, {…}, {…}, {…}],
  [{…}, {…}, {…}, {…}, {…}],
  [{…}, {…}, {…}, {…}, {…}],
  [{…}, {…}, {…}, {…}, {…}],
  [{…}, {…}, {…}, {…}, {…}],
]

Each node (default) - true means blocked by the wall
{
  n: true,
  e: true,
  s: true,
  w: true,
  visited: false
}
*/

const generateMaze = (maze, [xStart, yStart]) => {
  nextNode(xStart, yStart, maze)
  return maze
}

const nextNode = (x, y, maze) => {
  const node = maze[y][x]
  node.visited = true

  randomizeDirection().forEach(dir => {
    const [xMod, yMod] = getModifier(dir)

    if (
      maze[y + yMod] &&
      maze[y + yMod][x + xMod] &&
      !maze[y + yMod][x + xMod].visited
    ) {
      node[dir] = false
      maze[y + yMod][x + xMod][getOpposite(dir)] = false
      nextNode(x + xMod, y + yMod, maze)
    }
  })

  return false
}

const getModifier = dir => {
  switch (true) {
    case dir === 'n':
      return [0, 1]
    case dir === 's':
      return [0, -1]
    case dir === 'e':
      return [1, 0]
    case dir === 'w':
      return [-1, 0]
  }
}

const getOpposite = dir => {
  switch (true) {
    case dir === 'n':
      return 's'
    case dir === 's':
      return 'n'
    case dir === 'e':
      return 'w'
    case dir === 'w':
      return 'e'
  }
}

const maze1 = generateMaze(genEmptyMaze(5, 5), [0, 0])
writeMaze(maze1, document.getElementById('maze-1'))

const maze2 = generateMaze(genEmptyMaze(8, 8), [0, 0])
writeMaze(maze2, document.getElementById('maze-2'))

const maze3 = generateMaze(genEmptyMaze(15, 15), [0, 0])
writeMaze(maze3, document.getElementById('maze-3'))
