function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (currentNode.val < val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        return undefined;
      }
    }
  }
  find(val) {
    if (this.root === null) return undefined;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return undefined;
  }
  BFS() {
    const result = [];
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
  DFS_preOrder() {
    const result = [];
    traverse(this.root);
    return result;

    function traverse(node) {
      if (node === null) return;

      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
  }
  DFS_inOrder() {
    const result = [];
    traverse(this.root);
    return result;

    function traverse(node) {
      if (node === null) return;

      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    }
  }
  DFS_postOrder() {
    const result = [];
    traverse(this.root);
    return result;

    function traverse(node) {
      if (node === null) return;

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    }
  }
}

const bst = new BST();
console.log(bst.insert(5));
console.log(bst.insert(9));
console.log(bst.insert(3));
console.log(bst.insert(8));
console.log(bst.insert(4));
console.log(bst.find(9));
console.log(bst.BFS());
console.log(bst.DFS_preOrder());
console.log(bst.DFS_inOrder());
console.log(bst.DFS_postOrder());

//        5
//      /   \
//     3     9
//      \   /
//      4  8
