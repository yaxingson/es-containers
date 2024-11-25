function hash(value:unknown) {
  let hashCode = 0
  const json = JSON.stringify(value)

  for(let i = 0; i < json.length; i++) {
    hashCode += 37 * hashCode + json.charCodeAt(i)
  }

  return hashCode%100
}

function isPrime(value:number) {
  if(value < 2) return false

  const maxValue = Math.floor(Math.sqrt(value))

  for(let i = 2; i <= maxValue; i++) {
    if(value%i === 0) return false
  }

  return true
}

export default class HashMap<K extends string, V> {
  private storage:[K, V][][] = []
  private length = 0
  private loadFactor = 0

  private resize() {
    
  }

  set(key:K, value:V) {
    const hashCode = hash(key)
    const bucket = this.storage[hashCode] || (this.storage[hashCode] = [])
    
    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key) {
        return bucket[i][1] = value 
      }
    }
    
    bucket.push([key, value])
    this.length++
  }

  get(key:K) {
    if(!this.has(key)) return null

    const bucket = this.storage[hash(key)] 

    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key) return bucket[i][1]
    }
  }

  delete(key:K) {
    if(!this.has(key)) throw new Error('')

    const bucket = this.storage[hash(key)]


    this.length--
  }
  
  clear() {}
  
  has(key:K) {
    const bucket = this.storage[hash(key)] || []

    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key) return true
    }

    return false
  }
  
  size() { return this.length }

  toString() {
    return JSON.stringify(this.storage)
  }
}
