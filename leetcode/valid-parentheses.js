/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if
 * the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 * -----------------------------------------
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 * -----------------------------------------
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 * -----------------------------------------
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// Better
function isValid(s) {
  if (s.length % 2 !== 0) return false

  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i])
    } else if (stack.length) {
      const prev = stack.pop()
      if (map.get(prev) !== s[i]) {
        return false
      }
    } else {
      return false
    }
  }

  return stack.length === 0
}

// Usage
const s1 = '{[]}'
console.log(isValid(s1)) // true

const s2 = '{[](){}}'
console.log(isValid(s2)) // true

const s3 = '{[])({}}'
console.log(isValid(s3)) // false

const s4 = '([{}])'
console.log(isValid(s4)) // true

// First attempt
function _isValid(s) {
  if (s.length % 2 !== 0) return false
  const open = ['(', '{', '[']
  const match = ['()', '{}', '[]']
  const openList = []

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      openList.push(s[i])
    } else {
      if (!match.includes(openList.pop() + s[i])) {
        return false
      }
    }
  }

  return openList.length === 0
}

// Usage
const _s1 = '{[]}'
console.log(_isValid(_s1)) // true

const _s2 = '{[](){}}'
console.log(_isValid(_s2)) // true

const _s3 = '{[])({}}'
console.log(_isValid(_s3)) // false

const _s4 = '([{}])'
console.log(_isValid(_s4)) // true
