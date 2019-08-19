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

  lookup(value: number) {}
}

const traverse = node => {
  const tree = { value: node.value, left: null, right: null };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

export { BinarySearchTree, traverse };
