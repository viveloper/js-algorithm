function Node(val, priority) {
  this.value = val;
  this.priority = priority;
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    // swap root and last-leaf
    const root = this.values[0];
    const lastLeaf = this.values.pop();
    this.values[0] = lastLeaf;

    this.sinkDown();

    return root;
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);
    while (childIdx > 0) {
      if (this.values[parentIdx].priority >= this.values[childIdx].priority)
        return;

      // swap
      const temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[childIdx];
      this.values[childIdx] = temp;

      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }
    return;
  }

  sinkDown() {
    let parentIdx = 0;
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;
    let greaterChildIdx = this.getGreaterElementIdx(
      leftChildIdx,
      rightChildIdx
    );

    while (greaterChildIdx !== null) {
      if (
        this.values[greaterChildIdx].priority <= this.values[parentIdx].priority
      )
        return;
      // swap
      const temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[greaterChildIdx];
      this.values[greaterChildIdx] = temp;

      parentIdx = greaterChildIdx;
      leftChildIdx = parentIdx * 2 + 1;
      rightChildIdx = parentIdx * 2 + 2;
      greaterChildIdx = this.getGreaterElementIdx(leftChildIdx, rightChildIdx);
    }
  }

  getGreaterElementIdx(idx1, idx2) {
    const el1 = this.values[idx1];
    const el2 = this.values[idx2];
    if (el1 === undefined && el2 === undefined) return null;
    if (el1 === undefined) return idx2;
    if (el2 === undefined) return idx1;
    return el1.priority > el2.priority ? idx1 : idx2;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('common cold', 1);
priorityQueue.enqueue('gunshot wound', 5);
priorityQueue.enqueue('high fever', 2);
priorityQueue.enqueue('broken arm', 4);
priorityQueue.enqueue('glass in foot', 3);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
