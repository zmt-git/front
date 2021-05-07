/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ZMT
 * @Date: 2021-03-15 11:56:24
 * @LastEditors: ZMT
 * @LastEditTime: 2021-04-13 14:51:34
 */
// 双向链表
class Node {
  constructor(el) {
    this.element = el
    this.next = null
    this.previous = null
  }
}

class LinkList {
  constructor () {
    this.head = new Node(1)
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

    newNode.previous = current

    current.next = newNode
  }

  remove (item) {
    const current = this.find(item)

    if (current.next !== null) {
      current.previous.next = current.next
      current.next.previous = current.previous
      current.next =  null
      current.previous = null
    }
  }

  findPre (item) {
    let current = this.head

    while (current.next !== null && current.next.element !== item) {
      current = current.next
    }

    return current
  }

  findLast () {
    var current = this.head

    while(current.next !== null) {
      current = current.next
    }

    return current
  }

  display () {
    let current = this.head

    while(current.next !== null) {
      console.log(current.next.element)
      current = current.next
    }
  }

  displayReverse () {
    var current = this.findLast()

    while (current.previous !== null) {
      console.log(current.element)

      current = current.previous
    }
  }
}

const fruits = new LinkList()

fruits.insert(2, 1)
fruits.insert(3, 2)
fruits.insert(4, 3)
fruits.insert(5, 4)

fruits.remove(3)

fruits.display()
