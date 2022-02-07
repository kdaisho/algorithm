// Create a sum(), which makes following possible.

const sum1 = sum(1)

console.log(sum1(2) == 3) // true
console.log(sum1(3) == 4) // true
console.log(sum1(2)(3) == 6) // true
console.log(sum(2)(3) == 5) // true
console.log(sum(1) == 1) // true

function sum(num) {
  const fn = function (num2) {
    return num2 ? sum(num + num2) : num
  }
  fn.valueOf = () => num
  return fn
}
