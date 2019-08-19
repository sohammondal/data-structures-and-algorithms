import { BinarySearchTree, traverse } from "./binary-search-tree";

const bst = new BinarySearchTree();

test("is instance of Binary Search Tree", () => {
  expect(bst).toBeInstanceOf(BinarySearchTree);
});

test("is node with value 9 inserted to empty tree", () => {
  bst.insert(9);
  expect(JSON.stringify(traverse(bst.root))).toBe(
    JSON.stringify({ value: 9, left: null, right: null })
  );
});

test("is node with value 15 inserted to right of tree", () => {
  bst.insert(15);
  expect(JSON.stringify(traverse(bst.root))).toBe(
    JSON.stringify({
      value: 9,
      left: null,
      right: { value: 15, left: null, right: null }
    })
  );
});

test("is another node with value 20 to right of tree", () => {
  bst.insert(20);
  expect(JSON.stringify(traverse(bst.root))).toBe(
    JSON.stringify({
      value: 9,
      left: null,
      right: {
        value: 15,
        left: null,
        right: {
          value: 20,
          left: null,
          right: null
        }
      }
    })
  );
});

test("is another node with value 13 inserted to left of node with value 15", () => {
  bst.insert(13);
  expect(JSON.stringify(traverse(bst.root))).toBe(
    JSON.stringify({
      value: 9,
      left: null,
      right: {
        value: 15,
        left: {
          value: 13,
          left: null,
          right: null
        },
        right: {
          value: 20,
          left: null,
          right: null
        }
      }
    })
  );
});

test("is node with value 7 inserted to left of tree", () => {
  bst.insert(7);
  expect(JSON.stringify(traverse(bst.root))).toBe(
    JSON.stringify({
      value: 9,
      left: {
        value: 7,
        left: null,
        right: null
      },
      right: {
        value: 15,
        left: {
          value: 13,
          left: null,
          right: null
        },
        right: {
          value: 20,
          left: null,
          right: null
        }
      }
    })
  );
});
