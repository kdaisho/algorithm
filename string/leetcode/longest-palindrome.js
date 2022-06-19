/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Example 1:
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * -----------------------------------------------
 * Example 2:
 *
 * Input: s = "cbbd"
 * Output: "bb"
 * -----------------------------------------------
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length <= 1) return s
  let longestStr = ''

  for (let i = 0; i < s.length; i++) {
    const left = helper(s, i, i)
    const right = helper(s, i, i + 1)
    const current = left.length > right.length ? left : right
    longestStr = current.length > longestStr.length ? current : longestStr
  }

  return longestStr
}

function helper(s, left, right) {
  let currentStr = ''

  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    currentStr = s.slice(left, right + 1)
    left--
    right++
  }

  return currentStr
}

// Usage

const s1 = 'babad'
console.log(longestPalindrome(s1)) // bab

const s2 = 'cbbd'
console.log(longestPalindrome(s2)) // bb

const s3 = 'abcdefg'
console.log(longestPalindrome(s3)) // a
