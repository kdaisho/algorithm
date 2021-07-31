class ArrayList {
  constructor(data, length) {
    // instantiate all your variables
    this.data = data
    this.length = length
  }

  push(value) {
    // add an item to the end of array
    this.data[this.length] = value
    this.length++
  }

  pop() {
    // remove the last item in the array and returns ti
    return this.delete(this.length - 1)
  }

  get(index) {
    // returns that item from the array
    const item = this.data[index]
    return item
  }

  delete(index) {
    // removes item from the array collapses the array
    const deleted = this.data[index]
    if (deleted) {
      this._collapseTo(index)
    }
    return deleted
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const d = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
}

const al = new ArrayList(d, 6)

// console.log('DELETED', al.delete(6))
console.log('POPPED', al.pop())
console.log('D', d)
