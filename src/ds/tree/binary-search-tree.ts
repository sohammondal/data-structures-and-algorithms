class _Node {
  left: number | null | _Node;
  right: number | null | _Node;
  value: number | null | _Node;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: null | _Node;
  constructor() {
    this.root = null;
  }

  insert(value: number) {
    let node = new _Node(value);
    if (this.root) {
      let currentNode: any = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // > or =
          //Right
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    } else {
      this.root = node;
    }
    // return this;
  }

  lookup(value: number) {
    let currentNode: any = this.root;
    if (currentNode && value) {
      while (currentNode) {
        if (value > currentNode.value) {
          //right
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          //left
          currentNode = currentNode.left;
        } else if (value === currentNode.value) {
          //equal
          return currentNode;
        }
      }
    }
    return null;
  }

  remove(value: number) {
    let currentNode = this.root;
    if (currentNode && this.lookup(value).value === value) {
    }
  }
}

export { BinarySearchTree };
