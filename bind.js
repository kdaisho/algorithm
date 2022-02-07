// Implement Function.prototype.bind()
/**
 * const foo = function() {
 *  console.log(this.bar)
 * }
 *
 * let baz = foo.bind({ bar: 'Hello' })
 *
 * baz() // Hello
 */

// const foo = function () {
//   console.log(this.bar)
// }

// let baz = foo.bind({ bar: 'Hello' })

// baz() // Hello

function bind(fn, context) {
  return function () {
    fn.call(context)
  }
}

// const greeting = function () {
//   console.log(this)
//   console.log(this.name)
// }

// greeting()

// const obj = { name: 'John' }
// const newGreeting = greeting.bind(obj)
// newGreeting()
