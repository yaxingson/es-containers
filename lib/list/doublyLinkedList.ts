import { Node } from './types'

export default class DoublyLinkedList<T> {
  private head:Omit<Node<T>, 'data'> = { next:null }
  private tail:Node<T>|null = null
  private length = 0

  constructor() 
  constructor(iterable:Iterable<T>)
  constructor(length:number, fillValue:T) 
  constructor(lengthOrIterable?:number|Iterable<T>, fillValue?:T) {
    if(fillValue !== undefined) {

    } else if(lengthOrIterable) {
      for(const item of lengthOrIterable as Iterable<T>) {
        const node:Node<T> = { data:item, prev:null, next:null }

        if(this.head.next === null) {
          this.head.next = node
          continue
        }

        this.head.next.prev = node
        node.next = this.head.next
        this.head.next = node
      }
    }
  }

  append(item:T) {
    if(!this.head.next) {
      this.head.next = this.tail = { data:item, next:null, prev:null }
    } else {
      let node = this.head.next

      while(node.next) node = node.next

      node.next = this.tail = { data:item, prev:node, next:null }
    }
    this.length++
  }

  insert(index:number, item:T) {
    if(index === 0) {
      const next = this.head.next!
      this.head.next = next.prev = { data:item, next:next, prev:null }
    } else {
      let i = 0, node = this.head

      while(node.next) {
        if(i++ === index-1) {
          const next = node.next.next!
          node.next.next = next.prev = { data:item, next, prev:node.next}
          break
        }
        node = node.next
      }
    }
    this.length++
  }

  remove(item:T) {
    let node = this.head

    while(node.next) {
      if(node.next.data === item) {
        if(node.next.next) {
          node.next.next.prev = node.next.prev
        } else {
          this.tail = node.next.prev!
        }
        node.next = node.next.next
        break
      }
      node = node.next
    }

    this.length--
  }

  removeAt(index:number) {
    const item = this.get(index)
    item && this.remove(item)
  }

  indexOf(item:T) {
    if(this.head.next === null) return -1
    let index = 0, node = this.head

    while(node.next) {
      if(node.next.data === item) return index
      node = node.next
      index++
    }

    return index >= this.length ? -1 : index
  }

  set(index:number, item:T) {
    let i = 0, node = this.head

    while(node.next) {
      if(i++ === index) {
        node.next.data = item 
        break
      }
      node = node.next
    }
  }

  get(index:number) {
    let i = 0, node = this.head

    while(node.next) {
      if(i++ === index) return node.next.data
      node = node.next
    }
  }

  isEmpty() { return this.length === 0 }

  size() { return this.length }

  toString(reversed:boolean=false) {
    const items:T[] = []

    if(reversed) {
      let node = this.tail

      while(node) {
        items.push(node.data)
        node = node.prev!
      }
    } else {
      let node = this.head

      while(node.next) {
        items.push(node.next.data)
        node = node.next
      }
    }

    return `DoublyLinkedList { ${items.join(', ')} }`
  }
}
