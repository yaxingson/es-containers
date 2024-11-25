export default class HashSet<T> {
  constructor()
  constructor(iterable:Iterable<T>) 
  constructor() {}

  add(item:T) {}
  remove() {}
  
  has(item:T) {}
  
  clear() {}

  size() {}

  difference(other:HashSet<T>) {}
  union(other:HashSet<T>) {}
  intersection(other:HashSet<T>) {}

  isSubset(other:HashSet<T>) {}
}
