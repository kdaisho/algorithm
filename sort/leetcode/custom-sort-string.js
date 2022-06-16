/**
 * You are given two strings order and s. All the characters of order are unique and were sorted
 * in some custom order previously.
 *
 * Permute the characters of s so that they match the order that order was sorted. More
 * specifically, if a character x occurs before a character y in order, then x should occur
 * before y in the permuted string.
 *
 * https://leetcode.com/problems/custom-sort-string/
 *
 * * -------------------------------------------------------
 * Example 1:
 *
 * Input: order = "cba", s = "abcd"
 * Output: "cbad"
 * Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b",
 * and "a". Since "d" does not appear in order, it can be at any position in the returned
 * string. "dcba", "cdba", "cbda" are also valid outputs.
 * -------------------------------------------------------
 * Example 2:
 *
 * Input: order = "cbafg", s = "abcd"
 * Output: "cbad"
 * -------------------------------------------------------
 * Constraints:
 *
 * 1 <= order.length <= 26
 * 1 <= s.length <= 200
 */

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
function customSortString(order, s) {
  s = s.split('')
  let p1 = 0
  let str = ''

  for (let i = 0; i < order.length; i++) {
    while (p1 < s.length) {
      if (s[p1] === order[i]) {
        str += s.splice(p1, 1)
      } else {
        p1++
      }
    }
    p1 = 0
  }

  return str + s.join('')
}

// Usage

const order1 = 'cbafg'
const s1 = 'abcd'
console.log(customSortString(order1, s1)) // 'cbad'

const order2 = 'kqep'
const s2 = 'pekeq'
console.log(customSortString(order2, s2)) // 'kqeep'

const order3 = 'exv'
const s3 = 'xwvee'
console.log(customSortString(order3, s3)) // 'eexvw'
