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
    const lastNode = this.tail;
    if (this.length === 0) return lastNode;
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
console.log(singlyLinkedList.toArray());
console.log(singlyLinkedList.length);
