function getId(id, from, to) {
  let index = Infinity
  let value = from.indexOf(id)

  do {
    index = from.indexOf(value)
    if (index >= to.length - 1) {
      return value
    }
    if (index >= 0) {
      value = to[index]
    }
  } while (index >= 0)

  return value
}

let from = [1, 7, 4, 2, 3]
let to = [2, 3, 0, 5, 1]
let id = 7

console.log('GET 1 =>', getId(id, from, to))

from = []
to = []
id = 7
console.log('GET 2 =>', getId(id, from, to))

from = [2, 3, 4, 1]
to = [1, 2, 3]
id = 4
console.log('GET 3 =>', getId(id, from, to))
