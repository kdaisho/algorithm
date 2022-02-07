// Implement Array.prototype.map

// Make this work
// [1, 2, 3].myMap(n => n * 2)

// Solution
Array.prototype.myMap = function (cb) {
  return this.reduce((acc, cur) => {
    acc.push(cb(cur))
    return acc
  }, [])
}

const arr = [2, 3, 4]
console.log(arr.myMap(n => n * 2)) // [4, 6, 8]
