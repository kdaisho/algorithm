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

  unshift(value) {
    const node = new Node(value)
    this.length++

    const oldHead = this.head
    this.head = node
    this.head.next = oldHead

    if (this.tail === null) {
      this.tail = node
    }
  }

  insert(index, value) {
    if (index > this.length || index < 0) return null
    const node = new Node(value)
    this.length++

    const prev = this._find(index - 1)
    if (index === 0) {
      // index is 0 so this would be just like this.unshift()
      this.unshift(node)
    } else if (prev.next === null) {
      // this means index equals to this.length so just like this.push()
      this.push(value)
    } else {
      const oldNext = prev.next
      prev.next = node
      node.next = oldNext
    }
  }

  pop() {
    return this.delete(this.length - 1)
  }

  _find(index) {
    if (index >= this.length || index <= -1) return null
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

linkedList.push(7)
linkedList.unshift(5)
linkedList.unshift(10)
linkedList.insert(3, 15)
linkedList.insert(3, 25)
linkedList.push(0)

// console.log('deleted =>', linkedList.delete(0))

console.log('linkedList =>', JSON.stringify(linkedList, null, 2))
