import type { List } from './types'

type CompareFn<T> = (x:T, y:T)=>boolean

const lt: CompareFn<number|string> = (x, y) => x < y
const gt: CompareFn<number|string> = (x, y) => x > y

class OutOfRangeError extends Error {
  constructor() {
    super()
  }
}

class IllegalIndexError extends Error {
  constructor() {
    super()
  }
}

export default class ArrayList<T> implements List<T> {
  private cap = 2**32 - 1 
  private length = 0
  private items:T[] = []
  
  private isIllegal(index:number) {
    return index < 0 || index >= this.length
  }

  constructor() 
  constructor(iterable:Iterable<T>)
  constructor(length:number, fillValue:T) 
  constructor(lengthOrIterable?:number|Iterable<T>, fillValue?:T) {
    
  }

  append(item:T) {
    if(this.isFull()) throw ''
    this.items[this.length++] = item
  }

  insert(index:number, item:T) {
    if(this.isIllegal(index)) throw ''
    if(this.isFull()) throw ''

    for(let i = this.length; i > index; i--) {
      this.items[i] = this.items[i-1]
    }

    this.items[index] = item
    this.length++
  }

  remove(item:T) {
    const pos = this.indexOf(item)

    if(pos === -1) return

    for(let i = pos; i < this.length; i++) {
      this.items[i] = this.items[i+1]
    }

    this.length--
  }

  indexOf(item:T) {
    for(let i = 0; i < this.length; i++) {
      if(this.items[i] === item) return i
    }
    return -1
  }

  isFull() {
    return this.length >= this.cap
  }

  get(index: number) {
    if(this.length === 0 || index < 0 || index >= this.length) {}

    return this.items[index]
  }

  set(index: number, item: T) {
      
  }

  removeAt(index: number) {
    if(this.isEmpty() || this.isIllegal(index)) throw ''

    const item = this.items[index]

    for(let i = index; i < this.length; i++) {
      this.items[i] = this.items[i+1]
    }
    
    this.length--

    return item
  }

  clone() {
    return this
  }

  clear() {
    this.items.length = 0
    this.length = 0
  }

  isEmpty() {
    return this.length === 0
  }

  size() { return this.length }
  
  sort(compareFn:CompareFn<T>=gt as CompareFn<T>) {
    for(let i = 0; i < this.length; i++) {
      for(let j = i+1; j < this.length; j++) {
        if(compareFn(this.items[i], this.items[j])) {
          const temp = this.items[i]
          this.items[i] = this.items[j]
          this.items[j] = temp
        } 
      }
    }
  }

  reverse() {
    for(let i = 0, j = this.length-1; i < j; i++, j--) {
      const temp = this.items[i]
      this.items[i] = this.items[j]
      this.items[j] = temp
    }
  }

  toString() {
    return `ArrayList { ${this.items.join(', ')} }`
  }
}
