// Implement Promise.all

// Solution
async function all(promises) {
  const results = []
  for (const promise of promises) {
    results.push(await promise)
  }
  return results
}

async function callSequentially(promises) {
  for (const promise of promises) {
    await promise
  }
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => console.log('5 sec'))
  }, 5000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => console.log('8 sec'))
  }, 8000)
})

const promises = [promise1, promise2]

all(promises)

// callSequentially(promises)
