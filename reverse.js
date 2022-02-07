// Create a function to reverse a string

const str = 'Hello world!'

function reverse(str) {
  const strArr = str.split('')
  return strArr.reverse().join('')
}

console.log(reverse(str))
