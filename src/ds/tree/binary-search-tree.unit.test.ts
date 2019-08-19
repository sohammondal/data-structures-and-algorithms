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

test(`is a tree strcuture made with following strcuture --
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
