import { Queue } from "./queue-using-linked-list";

describe("Testing Queue implementation using LinkedList", () => {
  const q = new Queue();
  it("enqueues elements in queue", () => {
    q.enqueue("Soham");
    q.enqueue("Rohan");
    q.enqueue("Shyam");
    expect(q.show()).toStrictEqual(["Soham", "Rohan", "Shyam"]);
  });

  it("peeks first element in queue", () => {
    expect(q.peek()).toBe("Soham");
  });

  it("dequeues elements one by one", () => {
    expect(q.dequeue()).toBe("Soham");
    expect(q.dequeue()).toBe("Rohan");
    expect(q.dequeue()).toBe("Shyam");
    expect(() => q.dequeue()).toThrowError(
      new Error("Cannot dequeue an empty queue")
    );
  });

  it("checks if queue is empty", () => {
    expect(q.isEmpty()).not.toBeFalsy();
  });
});
