import type { Node } from './types'

export class BinaryTree<T> {}

export class BinarySearchTree<T extends number|string> {
  private root:Node<T>|null = null

  constructor() 
  constructor(iterable:Iterable<T>) 
  constructor(iterable?:Iterable<T>) {
    if(iterable) {
      for(const item of iterable) {
        if(this.root === null) {
          this.root = { data:item, left:null, right:null }
          continue
        }
      }
    }
  }

  private compare() {}

  insert(item:T) {
    const node = { data:item, left:null, right:null }

  }

  has(item:T) {}
  
  remove(item:T) {}

  min() {}
  max() {}

  traverse(order:'in'|'pre'|'post') {}
}


