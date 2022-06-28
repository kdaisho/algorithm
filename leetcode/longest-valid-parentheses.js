/**
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 *
 * https://leetcode.com/problems/longest-valid-parentheses/
 *
 * Example 1:
 *
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 * ---------------------------------------------------------------
 * Example 2:
 *
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 * ---------------------------------------------------------------
 * Example 3:
 *
 * Input: s = ""
 * Output: 0
 * ---------------------------------------------------------------
 * Constraints:
 *
 * 0 <= s.length <= 3 * 104
 * s[i] is '(', or ')'.
 */

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  const stack = []
  stack.push(-1)
  let max = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()

      if (!stack.length) {
        stack.push(i)
      } else {
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }

  return max
}

// Usage
const s1 = '())'
console.log(longestValidParentheses(s1)) // 2

const s2 = '()()'
console.log(longestValidParentheses(s2)) // 4

const s3 = '('
console.log(longestValidParentheses(s3)) // 0

const s4 = ')'
console.log(longestValidParentheses(s4)) // 0

const s5 = ')()())'
console.log(longestValidParentheses(s5)) // 4

const s6 = '())()'
console.log(longestValidParentheses(s6)) // 2

const s7 = '()(())'
console.log(longestValidParentheses(s7)) // 6
