// const data = [50, 35, 48, 12, 17, 37, 26, 6];

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let parentIndex = Math.floor((idx - 1) / 2);
    while (parentIndex >= 0) {
      if (this.values[idx] > this.values[parentIndex]) {
        // swap
        const temp = this.values[idx];
        this.values[idx] = this.values[parentIndex];
        this.values[parentIndex] = temp;
        idx = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
      } else {
        return;
      }
    }
  }
  extractMax() {
    if (this.values.length <= 0) return undefined;

    const root = this.values[0];
    const leaf = this.values.pop();

    this.values[0] = leaf;

    this.sinkDown();

    return root;
  }
  sinkDown() {
    let idx = 0;
    while (idx < this.values.length) {
      const leftIndex = 2 * idx + 1;
      const rightIndex = 2 * idx + 2;

      if (this.values[leftIndex] > this.values[rightIndex]) {
        if (this.values[idx] < this.values[leftIndex]) {
          // swap
          const temp = this.values[idx];
          this.values[idx] = this.values[leftIndex];
          this.values[leftIndex] = temp;

          idx = leftIndex;
        } else {
          break;
        }
      } else {
        if (this.values[idx] < this.values[rightIndex]) {
          // swap
          const temp = this.values[idx];
          this.values[idx] = this.values[rightIndex];
          this.values[rightIndex] = temp;

          idx = rightIndex;
        } else {
          break;
        }
      }
    }
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(50);
maxBinaryHeap.insert(35);
maxBinaryHeap.insert(48);
maxBinaryHeap.insert(51);
maxBinaryHeap.insert(46);
maxBinaryHeap.insert(49);
maxBinaryHeap.insert(70);
console.log(maxBinaryHeap.values);
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values);

//         70
//     50     51
//  35    46 48  49

//         51
//     50     49
//  35   46  48

// priority queue (min binary heap)
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.nodes = [];
  }
  enqueue(node) {
    this.nodes.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.nodes.length - 1;
    let parentIndex = Math.floor((idx - 1) / 2);
    while (parentIndex >= 0) {
      if (this.nodes[idx].priority < this.nodes[parentIndex].priority) {
        // swap
        const temp = this.nodes[idx];
        this.nodes[idx] = this.nodes[parentIndex];
        this.nodes[parentIndex] = temp;
        idx = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
      } else {
        return;
      }
    }
  }
  dequeue() {
    if (this.nodes.length <= 0) return undefined;

    const root = this.nodes[0];
    const leaf = this.nodes.pop();

    this.nodes[0] = leaf;

    this.sinkDown();

    return root;
  }
  sinkDown() {
    let idx = 0;
    const MAX_VALUE = 10000000;
    while (idx < this.nodes.length) {
      const leftIndex = 2 * idx + 1;
      const rightIndex = 2 * idx + 2;
      const leftPriority = this.nodes[leftIndex]
        ? this.nodes[leftIndex].priority
        : MAX_VALUE;
      const rightPriority = this.nodes[rightIndex]
        ? this.nodes[rightIndex].priority
        : MAX_VALUE;
      if (leftPriority < rightPriority) {
        if (this.nodes[idx].priority > this.nodes[leftIndex].priority) {
          // swap
          const temp = this.nodes[idx];
          this.nodes[idx] = this.nodes[leftIndex];
          this.nodes[leftIndex] = temp;

          idx = leftIndex;
        } else {
          break;
        }
      } else {
        if (this.nodes[idx].priority > rightPriority) {
          // swap
          const temp = this.nodes[idx];
          this.nodes[idx] = this.nodes[rightIndex];
          this.nodes[rightIndex] = temp;

          idx = rightIndex;
        } else {
          break;
        }
      }
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue({ value: '35N', priority: 50 });
priorityQueue.enqueue({ value: 'D850', priority: 35 });
priorityQueue.enqueue({ value: 'D750', priority: 48 });
priorityQueue.enqueue({ value: '85N', priority: 51 });
priorityQueue.enqueue({ value: 'D810', priority: 46 });
priorityQueue.enqueue({ value: '58N', priority: 49 });
priorityQueue.enqueue({ value: '28N', priority: 70 });
console.log(priorityQueue.nodes);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
