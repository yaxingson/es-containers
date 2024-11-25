export type Node<T> = {
  data:T
  left:Node<T>|null
  right:Node<T>|null
}
