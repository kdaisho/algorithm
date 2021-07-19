function fibonacci(n) {
  const sequence = [0, 1]

  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1])
  }

  return sequence[n]
}

/**
 *** fibonacci sequence ***
 * 0: 0
 * 1: 1
 * 2: 1
 * 3: 2
 * 4: 3
 * 5: 5
 * 6: 8
 * 7: 13
 * 8: 21
 * 9: 34
 * 10: 55
 */

const result = fibonacci(8)

console.log(result) // 21
