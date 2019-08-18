class _Node {
    left: number;
    right: number;
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}

class BinaryTree {
    root: null | _Node
    constructor() {
        this.root = null;
    }

    insert(value: number) {

    }
    lookup(value: number) {

    }
}

const traverse = (node) => {
    const tree = { value: node.value, left: null, right: null };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}