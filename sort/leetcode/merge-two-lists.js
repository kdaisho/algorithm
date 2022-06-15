/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the
 * nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Example 1:
 *
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * -----------------------------------------------
 * Example 2:
 *
 * Input: list1 = [], list2 = []
 * Output: []
 */

function ListNode(val = 0, next = null) {
  this.val = val
  this.next = next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// recursive solution
function mergeTwoLists(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1

  let head

  if (l1.val < l2.val) {
    head = l1
    l1 = l1.next
  } else {
    head = l2
    l2 = l2.next
  }

  head.next = mergeTwoLists(l1, l2)

  return head
}

// Usage

// [1, 2, 4]
const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
}
// [1, 3, 4]
const l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
}

console.log(JSON.stringify(mergeTwoLists(l1, l2), null, 2)) // [1,1,2,3,4,4]

// iterative solution
function mergeTwoLists2(l1, l2) {
  let head = new ListNode()
  let tail = head

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }
    tail = tail.next
  }

  tail.next = l1 === null ? l2 : l1

  return head.next
}

// [1, 2, 4]
const l1_ = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
}
// [1, 3, 4]
const l2_ = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
}

console.log(JSON.stringify(mergeTwoLists2(l1_, l2_), null, 2)) // [1,1,2,3,4,4]
