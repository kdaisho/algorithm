// Implement a simple DOM wrapper (like jQuery)

// Make this line work
$('#button').css('color', 'red').css('opacity', 0.5)

// Solution
function $(selector) {
  const element = document.querySelector(selector)
  return new Wrapper(element)
}

class Wrapper {
  constructor(ele) {
    this.ele = ele
  }

  css(property, value) {
    this.ele.style[property] = value
    return this
  }
}
