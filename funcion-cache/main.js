/**
 * If you are calculating complex things or execute time-consuming API calls,
 * you sometimes want to cache the results. In this case we want you to create a function wrapper
 * which takes a function and caches its results depending on the arguments, that were applied
 * to the function.
 */

function cache(fn) {
  const hash = {}

  return function () {
    const args = JSON.stringify(arguments)
    if (!(args in hash)) {
      // hash[args] = fn.apply(null, arguments)
      hash[args] = fn(...arguments)
    }

    return hash[args]
  }
}

const calc = num => {
  console.log('called')
  return num * num
}

const inner = cache(calc)

inner(2) // 'called'
inner(3) // 'called'
inner(4) // 'called'
inner(2)
inner(2)
