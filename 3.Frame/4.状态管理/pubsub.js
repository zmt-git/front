export default class PubSub {
  constructor () {
    this.events = {}
  }

  subscribe (event, callback) {
    this.events[event] = []

    this.events[event].push(callback)
  }

  publish (event, data = {}) {
    if (!this.events.hasOwnProperty(event)) {
      return []
    }

    return this.events[event].map(cb => cb(data))
  }
}