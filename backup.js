// merge sort
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(mergeSort([3, 7, 5, 4]));

// quick sort
function setPivot(arr, start, end) {
  const pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      // swap
      const temp = arr[i];
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }
  arr[start] = arr[swapIdx];
  arr[swapIdx] = pivot;

  return swapIdx;
}
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  const pivotIdx = setPivot(arr, start, end);
  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);

  return arr;
}
console.log(quickSort([5, 1, 4, 7, 8, 3, 9]));

// tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// binary search tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) this.root = new Node(value);
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(value);
          return this;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(value);
          return this;
        }
      } else {
        return undefined;
      }
    }
  }
  insertRecursive(value) {
    if (this.root === null) this.root = new Node(value);

    function temp(node) {
      // if(node===null) return;
      if (value < node.value) {
        if (node.left !== null) {
          temp(node.left);
        } else {
          node.left = new Node(value);
          return this;
        }
      } else if (value > node.value) {
        if (node.right !== null) {
          temp(node.right);
        } else {
          node.right = new Node(value);
          return this;
        }
      } else {
        return undefined;
      }
    }

    return temp(this.root);
  }
  find(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) currentNode = currentNode.left;
      else if (value > currentNode.value) currentNode = currentNode.right;
      else return true;
    }
    return false;
  }

  // traversal
  BFS() {
    const data = [];
    const queue = [];
    let currentNode = this.root;
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      data.push(currentNode.value);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    return data;
  }
  DFSPreOrder() {
    const data = [];
    function traversal(node) {
      if (node === null) return;
      data.push(node.value);
      traversal(node.left);
      traversal(node.right);
    }
    traversal(this.root);
    return data;
  }
  DFSPostOrder() {
    const data = [];
    function traversal(node) {
      if (node === null) return;
      traversal(node.left);
      traversal(node.right);
      data.push(node.value);
    }
    traversal(this.root);
    return data;
  }
  DFSInOrder() {
    const data = [];
    function traversal(node) {
      if (node === null) return;
      traversal(node.left);
      data.push(node.value);
      traversal(node.right);
    }
    traversal(this.root);
    return data;
  }
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(6);
BST.insert(15);
BST.insert(3);
BST.insert(8);
BST.insert(20);
BST.insert(4);

//                     10
//              6             15
//        3         8                20
//           4

// console.log(BST.BFS());
// console.log(BST.DFSPreOrder());
// console.log(BST.DFSPostOrder());
// console.log(BST.DFSInOrder());
