// Implement debounce

function debounce(fn, wait) {
  let time
  return function (...args) {
    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

debounce(arg => console.log(arg), 3000)(99)
