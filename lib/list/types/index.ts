import type { Container } from 'interface/container'

export interface List<T> extends Container<T> {
  get(index:number):T
  set(index:number, item:T):void
  indexOf(item:T):number
  insert(index:number, item:T):void
  append(item:T):void
  remove(item:T):void
  removeAt(index:number):T
  clone():List<T>
  reverse():void
}

export interface Stack<T> extends Container<T> {
  push(item:T):void
  pop():T
}

export interface Queue<T> extends Container<T> {
  enqueue(item:T):void
  dequeue():T
  enqueueLeft(item:T):void
  dequeueRight():T
}

export type Node<T> = {
  data: T
  next: Node<T>|null
  prev?: Node<T>|null
}
