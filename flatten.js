// Without using .flat(), create a function to flatten an array.

const res = []

function flatten(arr) {
  for (const item of arr) {
    if (!Array.isArray(item)) {
      res.push(item)
    } else {
      flatten(item)
    }
  }

  return res
}

function flattenV2() {
  const result = []
  return function inner(arr) {
    while (arr.length) {
      const item = arr.shift()
      if (Array.isArray(item)) {
        inner(item)
      } else {
        result.push(item)
      }
    }
    return result
  }
}

function flattenV3(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc = [...acc, ...flattenV3(cur)]
    } else {
      acc.push(cur)
    }
    return acc
  }, [])
}

const array = [1, 2, [3, 4, [5, 6], 7], 8]

const flat = flattenV3(array)

// console.log(flatten(array))
console.log(flat)
