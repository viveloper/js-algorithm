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
}

const bst = new BST();
console.log(bst.insert(5));
console.log(bst.insert(9));
console.log(bst.insert(3));
console.log(bst.insert(8));
console.log(bst.find(9));
