import type { Node, List } from './types'

export default class LinkedList<T> implements List<T> {
  private head:Omit<Node<T>, 'data'> = { next:null }
  private length = 0

  constructor()
  constructor(iterable:Iterable<T>)
  constructor(length:number, fillValue:T)
  constructor(lengthOrIterable?:number|Iterable<T>, fillValue?:T) {
    if(!lengthOrIterable) return
    if(fillValue !== undefined) {
      lengthOrIterable = Array<T>(lengthOrIterable as number).fill(fillValue)
    }

    for(const item of lengthOrIterable as Iterable<T>) {
      let temp:Node<T> = { data:item, next:null }

    }
  }

  get(index: number): T {
    throw new Error('Method not implemented.');
  }

  set(index: number, item: T): void {
    throw new Error('Method not implemented.');
  }

  indexOf(item: T): number {
    throw new Error('Method not implemented.');
  }

  insert(index: number, item: T) {
    if(index < 0 || index >= this.length) throw ''

    const temp:Node<T> = { data:item, next:null }

    if(index === 0) {
      temp.next = this.head.next
      this.head.next = temp
    } else {
      let currentNode = this.head

    }
  }

  append(item: T): void {
    throw new Error('Method not implemented.');
  }

  remove(item: T): void {
    throw new Error('Method not implemented.');
  }

  removeAt(index: number): T {
    throw new Error('Method not implemented.');
  }

  clone(): List<T> {
    throw new Error('Method not implemented.');
  }

  reverse(): void {
    throw new Error('Method not implemented.');
  }

  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }

  size(): number {
    throw new Error('Method not implemented.');
  }

  clear(): void {
    throw new Error('Method not implemented.');
  }

  toString(): string {
    const values:T[] = []
    let temp = this.head

    while(temp.next !== null) {
      values.push(temp.next.data)
      temp = temp.next
    }

    return `LinkedList{ ${values.join(' -> ') }}`
  }
}
