// Implement shuffle

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const rand = Math.floor(Math.random() * (i + 1))
    console.log({ i, rand })
    swap(i, rand, arr)
  }
}

function swap(i1, i2, arr) {
  console.log(arr[i2], arr[i1])
  ;[arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

const arr = [1, 2, 3, 4, 5]
shuffle(arr)
console.log(arr)
