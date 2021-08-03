class Tree {
  constructor() {
    this.root = null
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value)
    } else {
      let current = this.root
      while (true) {
        if (current.value > value) {
          // go left
          if (current.left) {
            current = current.left
          } else {
            current.left = new Node(value)
            break
          }
        } else {
          // go right
          if (current.right) {
            current = current.right
          } else {
            current.right = new Node(value)
            break
          }
        }
      }
    }

    return this
  }

  find(value) {
    if (this.root.value === value) {
      return this.root.value
    } else {
      let current = this.root
      while (true) {
        if (current.value > value) {
          if (current.left) {
            current = current.left
          } else {
            return -1
          }
        } else {
          if (current.right) {
            current = current.right
          } else {
            return -1
          }
        }
        if (current.value === value) {
          return current.value
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const tree = new Tree()
const list = [5, 8, 1, 7, 3, 6, 2, 4]

list.forEach(i => tree.add(i))

console.log(JSON.stringify(tree, null, 2))

console.log('Found', tree.find(3)) // 3
console.log('Not found', tree.find(10)) // -1
