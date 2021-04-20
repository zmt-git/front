// 循环链表
class Node {
  constructor(el) {
    this.element = el
    this.next = this
  }
}

class LinkList {
  constructor (head) {
    this.head = new Node(head)
  }

  find (item) {
    let current = this.head

    while(current.element !== item) {
      current = current.next
    }

    return current
  }

  insert (newElement, item) {
    const newNode = new Node(newElement)

    let current = this.find(item)


    newNode.next = current.next

    current.next = newNode
  }

  remove (item) {
    const currentPre = this.findPre(item)

    if (currentPre.next.next !== this.head) {
      currentPre.next = currentPre.next.next
    } else {
      currentPre.next = this.head
    }
  }

  findPre (item) {
    let current = this.head

    while (current.next !== this.head && current.next.element !== item) {
      current = current.next
    }

    return current
  }

  findLast () {
    var current = this.head

    while(current.next !== this.head) {
      current = current.next
    }

    return current
  }

  display () {
    let current = this.head

    while(current.next !== this.head) {
      console.log(current.next.element)
      current = current.next
    }
  }
}

const fruits = new LinkList(1)

fruits.insert(2, 1)
fruits.insert(3, 2)
fruits.insert(4, 3)
fruits.insert(5, 4)

// fruits.remove(3)

fruits.display()

