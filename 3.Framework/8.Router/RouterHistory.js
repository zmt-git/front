class Router {
  constructor () {
    this.routes = {}
    this._bindPopState.bind(this)
  }

  init (path) {
    history.replaceState({ path: path }, null, path)
    this.routes[path] && this.routes[path]()
  }

  route (path, callback) {
    this.routes[path] = callback || function () {}
  }

  go () {
    history.pushState({ path: path }, null, path)
    this.routes[path] && this.routes[path]()
  }

  _bindPopState() {
    addEventListener('popstate', e => {
      const path = e.state && e.state.path
      this.routes[path] && this.routes[path]()
    })
  }
}