class Router {
  constructor () {
    this.routes = {}

    this.currentUrl = ''

    this.history = []

    this.currentIndex = this.history.length - 1

    this.isBack = false

    addEventListener('load', this.refresh, false)
    addEventListener('hashchange', this.refresh, false)
  }

  route (path, callback = () => {}) {
    this.routes[path] = callback
  }

  refresh () {
    this.currentUrl = location.hash.slice('1') || '/'

    if (!this.isBack) {
      if (this.currentIndex < this.history.length - 1) {
        this.history = this.history.slice(0, this.currentIndex + 1)
      }
      this.history.push(this.currentUrl)

      this.currentIndex++
    }

    this.routes[this.currentUrl]()

    this.isBack = false
  }

  back () {
    this.isBack = true
    this.currentIndex <= 0
    ? (this.currentIndex = 0)
    : (this.currentIndex = this.currentIndex - 1)

    location.hash = `#${this.history[this.currentIndex]}`

    this.routes[this.history[this.currentIndex]]()
  }
}