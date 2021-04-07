enum StatusEnums {
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected'
}

class PromiseMine {
  status: StatusEnums
  value: any
  reason: any
  onResolveCallbacks: Function[]
  onRejectedCallbacks: Function[]

  constructor(executor) {
    this.status = StatusEnums.pending
    this.value = undefined
    this.reason = undefined
    this.onResolveCallbacks = []
    this.onRejectedCallbacks = []
  }

  then () {}

  catch () {}

  static all () {}

  static race () {}

  static resolve () {}

  static reject () {}

  static any () {}

  static allSettled () {}

}
