/**
 * @param {Number} number e.g. 2345
 * @param {Number} place index of number
 * e.g. place 0 of "2345" is 2, place 1 of "2345" is 3
 * @param {Number} longestNumber largest digit (keta)
 * e.g. ["2345", "589", "12"] => 4 (greatest length among items, in this case "2345")
 * @returns {Number}
 */
function getDigit(number, place, longestNumber) {
  const string = number.toString()
  const size = string.length
  const mod = longestNumber - size
  return string[place - mod] || 0
}

function getLongestNumber(array) {
  return Math.max(...array).toString().length
}

function radixSort(array) {
  // find longest number
  const longest = getLongestNumber(array) // 4
  // create how many buckets you need
  const buckets = new Array(10).fill().map(() => [])

  for (let i = longest - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift()
      buckets[getDigit(current, i, longest)].push(current)
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift())
      }
    }
  }
  return array
}

const nums = [
  20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
  3001, 1200, 633,
]

console.log(radixSort(nums)) // expected

const expected = [
  1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944, 1200,
  1244, 3000, 3001,
]
