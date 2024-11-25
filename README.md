## Get started

### Install

Use package manager:

```shell
$ npm i es-containers --save

```

CDN:

```html
<script src="https://unpkg.com/es-containers@latest/dist/es-containers.js"></script>

```

### Usage

```js
// commonjs
const { Stack, HashMap, BinaryTree } = require('es-containers')
const { ArrayList, Queue } = require('es-containers/list')

// esm
import { Stack, HashMap, BinaryTree } from 'es-containers'
import { ArrayList, Queue } from 'es-containers/list'

```

## Containers

- lists
	- `ArrayList`: A list backed by a dynamic array that grows and shrinks implicitly.
	- `LinkedList`: A list where each element points to the next element in the list.
	- `DoublyLinkedList`: A list where each element points to the next and previous elements in the list.
	- `LinkedListStack`
	- `ArrayStack`
	- `LinkedListQueue`
	- `ArrayQueue`
	- `PriorityQueue`

- Sets
	- `HashSet`: A set backed by a hash table. It makes no guarantees as to the iteration order of the set.
	- `TreeSet`: A set backed by a red-black tree to keep the elements ordered with respect to the comparator.
	- `LinkedHashSet`: A set that preserves insertion-order. Data structure is backed by a hash table to store values an`d doubly-linked list to store insertion ordering.

- Maps
	- `HashMap`: A map based on hash tables. Keys are unordered.
	- `TreeMap`: A map based on red-black tree. Keys are ordered with respect to the comparator.
	- `LinkedHashMap`: A map that preserves insertion-order. It is backed by a hash table to store values and doubly-linked list to store ordering.
	- `HashBidiMap`: A map based on two hashmaps. Keys are unordered.
	- `TreeBidiMap`: A map based on red-black tree

- Trees
	- `RedBlackTree`
	- `BinaryTree`
	- `BTree`
	- `AVLTree`

- Graphs
	- `DirectedGraph`

## Examples

### Lists

```js
import { LinkedList, ArrayStack } from 'es-containers/list'
import { StringComparator } from 'es-containers/util'

```

### Sets

```js
import { HashSet } from 'es-containers/set'

````

### Maps

```js
import { HashMap } from 'es-containers/map'

```

### Trees

```js
import { BinaryTree } from 'es-containers/tree'

```

### Graphs

```js
import { DirectedGraph } from 'es-containers/graph'

```

## Test & Benchmark
