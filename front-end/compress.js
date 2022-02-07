// Compress the repeating letters with count number

/**
 * Expected outputs
 *
 * compress('a') // a
 * compress('aa') // a2
 * compress('aaa') // a3
 * compress('aaabba') // a3b2a
 */

// Solution (aligned with the expected output)
function compress(str) {
  const arr = str.split('')
  let last = arr[0]
  let count = 0
  let out = ''

  const getStr = (_last, c) => {
    const _count = c === 1 ? '' : c
    return _last + _count
  }

  for (const item of arr) {
    if (last === item) {
      count++
    } else {
      out += getStr(last, count)
      count = 1
      last = item
    }
  }

  out += getStr(last, count)
  return out
}

console.log(compress('a')) // a
console.log(compress('aaabba')) // a3b2a
console.log(compress('aaabbaccccb')) // a3b2ac4b
console.log(compress('aaabbaccccbbb')) // a3b2ac4b3

// Solution (NOT aligned with the expected output)
function compress2(str) {
  const ref = {}
  const arr = str.split('')

  for (let i = 0; i < arr.length; i++) {
    if (!ref[arr[i]]) {
      ref[arr[i]] = 1
    } else {
      ref[arr[i]] = ref[arr[i]] + 1
    }
  }

  return ref
}

console.log(compress2('a')) // { a: 1 }
console.log(compress2('aaabba')) // { a: 4, b: 2 }
console.log(compress2('aaabbaccccb')) // { a: 4, b: 3, c: 4 }
console.log(compress2('aaabbaccccbbb')) // { a: 4, b: 5, c: 4 }
