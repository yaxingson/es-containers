export default class PriorityQueue<T> {
  private items:[T, number][] = []

  enqueue(item:T, priority:number=Number.MIN_SAFE_INTEGER) {
    const index = this.items.findIndex(([_, _priority])=>_priority < priority)

    if(index === -1) this.items.push([item, priority])
    else this.items.splice(index, 0, [item, priority]) 
  }

  dequeue() {
    return this.items.shift()![0]
  }

  front() {
    return this.items[0][0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    return `PriorityQueue { ${this.items.map(item=>`[${item[0]}, ${item[1]}]`).join(', ')} }`
  }
}
