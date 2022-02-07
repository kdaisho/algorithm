// Implement throttle

function throttle(fn, wait) {
  let timeout = false

  return function (...args) {
    if (!timeout) {
      fn.apply(this, args)
      // fn(...args)
      timeout = true
      lastArg = null

      setTimeout(() => {
        console.log('lastArg 0:', lastArg)
        if (lastArg) {
          console.log('lastArg 1:', lastArg)
          fn.apply(this, lastArg)
          timeout = false
        }
      }, wait)
    } else {
      lastArg = [...args]
    }
  }
}

function test(arg) {
  console.log('Sending...', arg)
}

throttle(test, 5000)('yatta')
throttle(test, 2000)('faster')
// th5({ data: [1, 2, 3] })
// th2({ data: ['nothing'] })
