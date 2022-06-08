function TreeNode(val) {
  this.val = val ?? 0
  this.left = null
  this.right = null
}

function sortedArrayToBST(nums) {
  function helper(left, right) {
    if (left > right) return null

    // always choose left middle node as a root
    const p = Math.floor((left + right) / 2)
    const root = new TreeNode(nums[p])

    root.left = helper(left, p - 1)
    root.right = helper(p + 1, right)

    return root
  }

  return helper(0, nums.length - 1)
}

const nums = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(nums))

/**
 * Output:
 *
 * TreeNode {
    val: 0,
    left: TreeNode {
      val: -10,
      left: null,
      right: TreeNode { val: -3, left: null, right: null }
    },
    right: TreeNode {
      val: 5,
      left: null,
      right: TreeNode { val: 9, left: null, right: null }
    }
  }
 *
 * a hight-balanced binary search tree
 *
 *      0
 *    /   \
 * -10      5
 *     \      \
 *     -3       9
 */

const nums2 = [1, 3]
console.log(sortedArrayToBST(nums2))

/**
 * TreeNode {
    val: 1,
    left: null,
    right: TreeNode { val: 3, left: null, right: null }
  }

  * a hight-balanced binary search tree

    1
      \
        3
 */

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solution/
