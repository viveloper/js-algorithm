class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  extractMax() {
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
      if (this.values[parentIdx] >= this.values[childIdx]) return;

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
      if (this.values[greaterChildIdx] <= this.values[parentIdx]) return;
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
    return el1 > el2 ? idx1 : idx2;
  }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(4);
maxHeap.insert(8);
maxHeap.insert(7);
maxHeap.insert(10);
maxHeap.insert(50);
maxHeap.insert(32);
maxHeap.insert(47);
maxHeap.insert(17);
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());

//            50
//       17        47
//    10    8   7     32
//  4

//            47
//       17        32
//    10    8   7     4
