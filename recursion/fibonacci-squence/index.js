function fibonacci(n) {
  // base case
  if (n === 2 || n === 1) {
    return 1
  } else if (n === 0) {
    return 0
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
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

const result = fibonacci(5)

console.log(result) // 5

/**
 *                                fibonacci(5)
 *                                     |
 *                            ---------|----------
 *                          /                      \
 *                        /                          \
 *                 fibonacci(4)                    fibonacci(3)
 *                /           \                   /           \
 *              /               \               /               \
 *        fibonacci(3)        fibonacci(2)   fibonacci(2)   fibonacci(1)
 *        /         \              |              |              |
 *      /             \            1              1              1
 * fibonacci(2)   fibonacci(1)
 *     |               |
 *     1               1
 */
