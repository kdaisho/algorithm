/**
 * You are given an array of logs. Each log is a space-delimited string of words, where the
 * first word is the identifier.
 *
 * There are two types of logs:
 * Letter-logs: All words (except the identifier) consist of lowercase English letters
 * Digit-logs: All words (except the identifier) consist of digits.
 *
 * Reorder these logs so that:
 *
 * The letter-logs come before all digit-logs.
 * The letter-logs are sorted lexicographically by their contents. If their contents are the
 * same, then sort them lexicographically by their identifiers.
 * The digit-logs maintain their relative ordering.
 * Return the final order of the logs.
 *
 * https://leetcode.com/problems/reorder-data-in-log-files/
 *
 * Example 1:
 *
 * Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
 * Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
 */

/**
 * @param {string[]} logs
 * @return {string[]}
 */
function reorderLogFiles(logs) {
  const result = []
  const map = new Map()

  for (const [k, log] of logs.entries()) {
    const firstSpaceIndex = log.indexOf(' ')
    const key = log.substring(0, firstSpaceIndex)
    const value = log.substring(firstSpaceIndex + 1) // needs `+1` or value will be like ' abc'
    const secondSpaceIndex = value.indexOf(' ')
    const identifier =
      secondSpaceIndex === -1 ? value : value.substring(0, secondSpaceIndex)

    if (isNaN(identifier)) {
      // isNaN('abc') -> true
      map.set(k, [key, value])
    } else {
      // isNaN('123') -> false
      result.push(log)
    }
  }

  const sorted = [...map].sort((a, b) => {
    switch (true) {
      case a[1][1] < b[1][1]:
        return -1
      case a[1][1] > b[1][1]:
        return 1
      default:
        switch (true) {
          case a[1][0] < b[1][0]:
            return -1
          case a[1][0] > b[1][0]:
            return 1
          default:
        }
    }
  })

  while (sorted.length) {
    result.unshift(sorted.pop()[1].join(' '))
  }

  return result
}

// Usage
const l1 = ['t kvr', 'r 3 1', 'i 403', '7 so', 't 54']
console.log(reorderLogFiles(l1)) // ["t kvr","7 so","r 3 1","i 403","t 54"]

const l2 = ['g1 act car', 'zo4 4 7', 'a8 act zoo', 'a2 act car']
console.log(reorderLogFiles(l2)) // [ 'a2 act car', 'g1 act car', 'a8 act zoo', 'zo4 4 7' ]

const l3 = ['27 857 7', '7e apw c', '8 hyyq z p', '6 3272', '8 ksf u']
console.log(reorderLogFiles(l3)) // [ '7e apw c', '8 hyyq z p', '8 ksf u', '27 857 7', '6 3272' ]
