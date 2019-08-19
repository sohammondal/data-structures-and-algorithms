import { BinarySearchTree } from "./binary-search-tree";

const bst = new BinarySearchTree();

const traverse = node => {
  const tree = { value: node.value, left: null, right: null };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

test("is instance of Binary Search Tree", () => {
  expect(bst).toBeInstanceOf(BinarySearchTree);
});

test("is insert(9) working on empty tree", () => {
  bst.insert(9);
  expect(JSON.stringify(traverse(bst.root))).toBe(
    JSON.stringify({ value: 9, left: null, right: null })
  );
});

test(`is a tree made with following strcuture --
                      9
                  4       20
                1   6  15   170
`, () => {
  bst.insert(4);
  bst.insert(6);
  bst.insert(20);
  bst.insert(170);
  bst.insert(15);
  bst.insert(1);
  expect(JSON.stringify(traverse(bst.root))).toBe(
    JSON.stringify({
      value: 9,
      left: {
        value: 4,
        left: { value: 1, left: null, right: null },
        right: { value: 6, left: null, right: null }
      },
      right: {
        value: 20,
        left: { value: 15, left: null, right: null },
        right: { value: 170, left: null, right: null }
      }
    })
  );
});

test("is lookup(1) working", () => {
  const node = bst.lookup(1);
  expect(JSON.stringify(node)).toBe(
    JSON.stringify({
      value: 1,
      left: null,
      right: null
    })
  );
});

test("is lookup(20) working", () => {
  const node = bst.lookup(20);
  expect(JSON.stringify(node)).toBe(
    JSON.stringify({
      value: 20,
      left: {
        value: 15,
        left: null,
        right: null
      },
      right: {
        value: 170,
        left: null,
        right: null
      }
    })
  );
});

test("is lookup(null) working", () => {
  const node = bst.lookup(null);
  expect(node).toBe(null);
});

test("is lookup(-1) working", () => {
  const node = bst.lookup(-1);
  expect(node).toBe(null);
});
