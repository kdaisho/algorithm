// Linked list

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    const node = new Node(value)
    this.length++

    if (this.head === null) {
      this.head = node
    } else {
      // tricky part
      this.tail.next = node
    }
    this.tail = node
  }

  pop() {
    return this.delete(this.length - 1)
  }

  _find(index) {
    if (index >= this.length) return null
    let cur = this.head
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    return cur
  }

  get(index) {
    const node = this._find(index)
    if (!node) return void 0 // undefined
    return node.value
  }

  delete(index) {
    if (index === 0) {
      const head = this.head
      if (head) {
        this.head = head.next
      } else {
        return void 0
      }
      this.length--
      return head.value
    }

    const prev = this._find(index - 1)
    if (!prev) return void 0
    const target = prev.next
    if (!target) return void 0
    prev.next = target.next
    if (target.next === null) this.tail = prev
    this.length--
    return target.value
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/**
 * Using LinkedList
 */

const linkedList = new LinkedList()

linkedList.push(3)
linkedList.push(5)
linkedList.push(7)
// linkedList.push(9)

// console.log('deleted =>', linkedList.delete(0))
// console.log('deleted =>', linkedList.delete(0))
// console.log('deleted =>', linkedList.delete(1))

console.log('linkedList =>', JSON.stringify(linkedList, null, 2))
