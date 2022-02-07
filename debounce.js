function debounce(fn, time) {
  let timeoutId

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn.apply(this, arguments)
      timeoutId = null
    }, time)
  }
}

const deb = debounce(e => {
  console.log(e)
}, 3500)

deb(() => {
  console.log('YOYO')
}, 500)
deb(() => {
  console.log('YOYO')
}, 500)
deb(() => {
  console.log('YOYO')
}, 500)
deb(() => {
  console.log('YOYO')
}, 500)
deb(() => {
  console.log('YOYO')
}, 500)

debounce()
debounce()
debounce()
