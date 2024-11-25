import { Node } from './types'

export default class CircularLinkedList<T> {
  private head:Omit<Node<T>, 'data'> = { prev:null, next:null }
  private tail: Node<T>|null = null
  private length = 0

  constructor() 
  constructor(iterable:Iterable<T>)
  constructor(length:number, fillValue:T)
  constructor(lengthOrIterable?:number|Iterable<T>, fillValue?:T) {
    this.head.next = this.head as Node<T>
    this.head.prev = this.head as Node<T>

    if(fillValue) {}
    else if(lengthOrIterable) {
      for(const item of lengthOrIterable as Iterable<T>) {
        
      }
    }
  }

  insert(index:number, item:T) {}

  removeAt(index:number) {}

  indexOf(item:T) {}

  isEmpty() {
    return this.head.next === this.head
  }

  toString() {
    const items:T[] = []

    let node = this.head

    while(node.next) {
      items.push(node.next.data)
      node = node.next
    }

    return `CircularLinkedList { ${items.join(', ')} }`
  }
}
