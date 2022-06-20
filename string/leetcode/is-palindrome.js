/**
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 *
 * https://leetcode.com/problems/palindrome-number/
 *
 * Example 1:
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * -------------------------------------------------------------------------
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * -------------------------------------------------------------------------
 * Constraints:
 *
 * -231 <= x <= 231 - 1
 */

function isPalindrome(x) {
  if (x <= -1) return false
  if (x <= 9) return true

  x = x.toString().split('')
  let start = 0
  let end = x.length - 1

  while (start < end) {
    if (x[start] === x[end]) {
      start++
      end--
    } else {
      return false
    }
  }

  return true
}

// Usage

const x1 = 121
console.log(isPalindrome(x1)) // true

const x2 = -121
console.log(isPalindrome(x2)) // false

const x3 = 10
console.log(isPalindrome(x3)) // false
