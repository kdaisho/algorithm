// Create a function that takes a string and returns a
// new string with duplicates removed.

const text = 'This is a is test but not test at least.'

function removeDup(txt) {
  const arr = txt.split(' ')
  const ref = [arr[0]]

  arr.filter(item => {
    if (!ref.includes(item)) {
      ref.push(item)
    }
  })

  return ref.join(' ')
}

function removeDupV2(txt) {
  const arr = txt.split(' ')
  const set = new Set(arr)
  const newString = [...set].join(' ')

  return newString
}

console.log(removeDupV2(text))
