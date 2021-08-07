/**      ___8___
 *      /       \
 *    _3_        10_
 *   /   \          \
 *  1    _6_        _14
 *      /   \      /
 *     4     7   13
 *
 * ===== pre-order =====
 * [8,3,1,6,4,7,10,14,13]
 *
 * ===== in-order ======
 * [1,3,4,6,7,8,10,13,14]
 *
 * ===== post-order =====
 * [1,4,7,6,3,13,14,10,8]
 */

const preorderTraverse = (node, array) => {
  if (!node) {
    return array
  }
  array.push(node.value)
  array = preorderTraverse(node.left, array)
  array = preorderTraverse(node.right, array)

  return array
}

const inorderTraverse = (node, array) => {
  if (!node) {
    return array
  }
  array = inorderTraverse(node.left, array)
  array.push(node.value)
  array = inorderTraverse(node.right, array)

  return array
}

const postorderTraverse = (node, array) => {
  if (!node) {
    return array
  }
  array = postorderTraverse(node.left, array)
  array = postorderTraverse(node.right, array)
  array.push(node.value)

  return array
}

const tree = {
  value: 8,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 10,
    left: null,
    right: {
      value: 14,
      left: {
        value: 13,
        left: null,
        right: null,
      },
      right: null,
    },
  },
}

const preorder = preorderTraverse(tree, [])
console.log(
  JSON.stringify(preorder) === JSON.stringify([8, 3, 1, 6, 4, 7, 10, 14, 13])
)

const inorder = inorderTraverse(tree, [])
console.log(
  JSON.stringify(inorder) === JSON.stringify([1, 3, 4, 6, 7, 8, 10, 13, 14])
)

const postorder = postorderTraverse(tree, [])
console.log(
  JSON.stringify(postorder) === JSON.stringify([1, 4, 7, 6, 3, 13, 14, 10, 8])
)

console.log(preorderTraverse(tree, []))
console.log(inorderTraverse(tree, []))
console.log(postorderTraverse(tree, []))
