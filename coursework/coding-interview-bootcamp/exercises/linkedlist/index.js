// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    return this.insertAt(data, 0);
  }

  // My recursive solution for size()
  //   size(node = this.head, count = 0) {
  //     while (node) {
  //       count++;
  //       return this.size(node.next, count);
  //     }

  //     return count;
  //   }

  // Course solution
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) return null;

    // let node = this.head;
    // while (node) {
    //   if (!node.next) return node;
    //   node = node.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next || null;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);

    let prev = this.head;
    let node = this.head.next;
    while (node) {
      if (!node.next) prev.next = null;
      prev = prev.next;
      node = node.next;
    }
  }

  insertLast(data) {
    const node = new Node(data);
    this.getLast() ? (this.getLast().next = node) : (this.head = node);
  }

  getAt(n) {
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === n) return node;
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(n) {
    if (!this.head) return;
    if (n === 0) return this.removeFirst();

    const prev = this.getAt(n - 1);
    prev.next = prev.next ? prev.next.next : null;
  }

  insertAt(data, n) {
    if (!this.head || n === 0) return (this.head = new Node(data, this.head));

    const prevNode = this.getAt(n - 1) || this.getLast();
    prevNode.next = new Node(data, prevNode.next);
  }

  forEach(fn) {
    let [node, index] = [this.head, 0];

    while (node) {
      fn(node, index);
      index++;
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
