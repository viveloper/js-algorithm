// frequency counter
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};
  for (let letter of str1) {
    lookup[letter] = lookup[letter] ? lookup[letter] + 1 : 1;
  }

  for (let letter of str2) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter]--;
    }
  }

  return true;
}

// console.log(validAnagram('hello', 'olleh'));

// multiple pointers
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 1;
  let prevIndex = 0;
  for (let currentIndex = 1; currentIndex < arr.length; currentIndex++) {
    if (arr[prevIndex] !== arr[currentIndex]) {
      count++;
      prevIndex = currentIndex;
    }
  }

  return count;
}

// sliding window
const maxSubarraySum = (arr, n) => {
  if (arr.length < n) {
    return null;
  }
  let max = null;
  for (let pivot = 0; pivot < arr.length; pivot++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[pivot + i];
    }
    if (max < sum) {
      max = sum;
    }
  }
  return max;
};

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarraySum([], 4));

// divide and conquer
const search = (arr, v) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);

    if (v < arr[pivot]) {
      right = pivot - 1;
    } else if (v > arr[pivot]) {
      left = pivot + 1;
    } else {
      return pivot;
    }
  }
  return -1;
};

// console.log(search([1, 2, 3, 4, 10, 18, 22, 108, 901, 1011], 18));

// recursion
const factorial = n => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

// console.log(factorial(5));

// merge sort
// merge sorted two array
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

// console.log(merge([2, 3, 5, 8], [1, 4, 6, 9]));

// merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(mergeSort([2, 7, 4, 6, 2, 9, 3]));

// quick sort
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function pivot(arr, start, end) {
  const pivot = arr[start];
  let swapIdx = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  const swapIdx = pivot(arr, start, end);
  quickSort(arr, start, swapIdx - 1);
  quickSort(arr, swapIdx + 1, end);
  return arr;
}

// const testArr = [4, 7, 2, 3, 8];
// console.log(quickSort(testArr));

// Binary Search tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        return undefined;
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          return false;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          return false;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        return true;
      }
    }
  }

  BFS() {
    const data = [];
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const currentNode = queue.shift();
      data.push(currentNode.value);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    return data;
  }

  DFSPreOrderRecursive() {
    const data = [];

    function traversal(node) {
      if (!node) return;
      data.push(node.value);
      if (node.left !== null) {
        traversal(node.left);
      }
      if (node.right !== null) {
        traversal(node.right);
      }
    }

    traversal(this.root);
    return data;
  }

  DFSPreOrderIterative() {
    const data = [];
    const stack = [];
    stack.push({ ...this.root });
    data.push(this.root.value);
    let currentNode = stack[stack.length - 1];
    while (stack.length > 0) {
      if (currentNode.left !== null) {
        stack.push({ ...currentNode.left });
        data.push(currentNode.left.value);
        currentNode.left = null;
        currentNode = stack[stack.length - 1];
      } else if (currentNode.right !== null) {
        stack.push({ ...currentNode.right });
        data.push(currentNode.right.value);
        currentNode.right = null;
        currentNode = stack[stack.length - 1];
      } else {
        stack.pop();
        currentNode = stack[stack.length - 1];
      }
    }
    return data;
  }

  DFSPostOrderRecursive() {
    const data = [];

    function traversal(node) {
      if (!node) return;
      if (node.left !== null) {
        traversal(node.left);
      }
      if (node.right !== null) {
        traversal(node.right);
      }
      data.push(node.value);
    }

    traversal(this.root);
    return data;
  }

  DFSPostOrderIterative() {
    const data = [];
    const stack = [];
    stack.push({ ...this.root });
    let currentNode = stack[stack.length - 1];
    while (stack.length > 0) {
      if (currentNode.left !== null) {
        stack.push({ ...currentNode.left });
        currentNode.left = null;
        currentNode = stack[stack.length - 1];
      } else if (currentNode.right !== null) {
        stack.push({ ...currentNode.right });
        currentNode.right = null;
        currentNode = stack[stack.length - 1];
      } else {
        data.push(stack.pop().value);
        currentNode = stack[stack.length - 1];
      }
    }
    return data;
  }

  DFSInOrderRecursive() {
    const data = [];

    function traversal(node) {
      if (!node) return;
      if (node.left !== null) {
        traversal(node.left);
      }
      data.push(node.value);
      if (node.right !== null) {
        traversal(node.right);
      }
    }

    traversal(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(4);

console.log(tree.BFS());
console.log(tree.DFSPreOrderRecursive());
console.log(tree.DFSPreOrderIterative());
console.log(tree.DFSPostOrderRecursive());
console.log(tree.DFSPostOrderIterative());
console.log(tree.DFSInOrderRecursive());
