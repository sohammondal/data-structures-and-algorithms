import { LinkedList } from "./linked-list";
const myLinkedList = new LinkedList(10);

test("is new object Instance of LinkedList", () => {
  expect(myLinkedList).toBeInstanceOf(LinkedList);
});
describe("Checking various LinkedList operations", () => {
  let list = null;
  describe("is append() working", () => {
    it("appends 5 to the list", () => {
      list = myLinkedList.append(5);
      expect(list.tail.value).toBe(5);
    });
    it("does not append undefined to the list, but throws error", () => {
      expect(() => myLinkedList.append(undefined)).toThrowError(
        new Error("Value cannot be " + typeof undefined)
      );
    });
    it("appends 16 to the list", () => {
      list = myLinkedList.append(16);
      expect(list.tail.value).toBe(16);
    });
  });

  describe("is prepend() working", () => {
    it("adds node to the beginning of the list", () => {
      list = myLinkedList.prepend(1);
      expect(list.head.value).toBe(1);
    });
  });

  describe("is insert() working", () => {
    myLinkedList.insert(2, 99);
    it("inserts 99 at index 2", () => {
      expect(myLinkedList.show(myLinkedList.head)).toStrictEqual([
        1,
        10,
        99,
        5,
        16
      ]);
    });
    it("throws error as index is null & value is undefined", () => {
      expect(() => myLinkedList.insert(null, undefined)).toThrowError(
        new Error("Index and Value cannot be null/undefined")
      );
    });
    it("throws error as index is null", () => {
      expect(() => myLinkedList.insert(null, -9)).toThrowError(
        new Error("Index cannot be " + typeof null)
      );
    });
    it("inserts value at the end of the list as index is greater than the length of the list", () => {
      myLinkedList.insert(10, 88);
      expect(myLinkedList.show(myLinkedList.head)).toStrictEqual([
        1,
        10,
        99,
        5,
        16,
        88
      ]);
    });
  });

  describe("is remove working", () => {
    it("removes node at index 2", () => {
      myLinkedList.remove(2);
      expect(myLinkedList.show(myLinkedList.head)).toStrictEqual([
        1,
        10,
        5,
        16,
        88
      ]);
    });
    it("throws error as index is undefined", () => {
      expect(() => myLinkedList.remove(undefined)).toThrowError(
        new Error("Index cannot be " + typeof undefined)
      );
    });
  });

  describe("is reverse working", () => {
    it("reverses the linked-list", () => {
      list = myLinkedList.reverse();
      expect(myLinkedList.show(list.head)).toStrictEqual([88, 16, 5, 10, 1]);
    });
  });
});
