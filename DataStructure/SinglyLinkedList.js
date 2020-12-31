function Node(val) {
  this.val = val;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const lastNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return lastNode;
    }

    let currentNode = this.head;
    let newTail = null;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return lastNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const firstNode = this.head;
    this.head = this.head.next;
    this.length--;
    return firstNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  getNode(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentIndex === index) return currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  setNode(index, val) {
    const targetNode = this.getNode(index);
    if (!targetNode) return null;
    targetNode.val = val;
    return targetNode;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.unshift(val);
    const prevNode = this.getNode(index - 1);
    const newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = this.getNode(index - 1);
    const targetNode = prevNode.next;
    prevNode.next = targetNode.next;
    this.length--;
    return targetNode;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }

  toArray() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1).push(2).push(3);
console.log(singlyLinkedList.toArray());
console.log(singlyLinkedList.length);
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.toArray());
console.log(singlyLinkedList.unshift(1).unshift(2).unshift(3));
console.log(singlyLinkedList.toArray());
console.log(singlyLinkedList.length);
console.log(singlyLinkedList.getNode(1));
console.log(singlyLinkedList.setNode(1, 7));
console.log(singlyLinkedList.toArray());
console.log(singlyLinkedList.length);
console.log(
  singlyLinkedList.insert(1, 4).insert(0, 9).insert(4, 5).insert(5, 1)
);
console.log(singlyLinkedList.toArray());
console.log(singlyLinkedList.length);
console.log(singlyLinkedList.remove(0));
console.log(singlyLinkedList.remove(5));
console.log(singlyLinkedList.remove(2));
console.log(singlyLinkedList.toArray());
console.log(singlyLinkedList.length);
console.log(singlyLinkedList.reverse());
console.log(singlyLinkedList.toArray());
console.log(singlyLinkedList.length);
