// Implement a localStorage wrapper with expiration support

/**
 * Make these lines work
 *
 * myLocalStorage.setItem('one', 'dev', 3000)
 * myLocalStorage.getItem('one')
 *
 * After 3 seconds
 * myLocalStorage.getItem('one') // null
 */

window.myLocalStorage = {
  getItem(key) {
    const value = localStorage.getItem(key)
    return value ? value : null
  },

  setItem(key, value, maxAge) {
    if (maxAge >= 0) {
      setTimeout(() => {
        localStorage.removeItem(key)
      }, maxAge)
    }
    localStorage.setItem(key, value)
  },
}
