import { Stack } from "./stacks-using-linked-list";

describe("checking operations using Stack", () => {
  const myStack = new Stack();

  it("is a instance of Stack", () => {
    expect(myStack).toBeInstanceOf(Stack);
  });

  it("pushes google to stack", () => {
    myStack.push("google");
    expect(myStack.show()).toStrictEqual(["google"]);
  });

  it("pushes udemy to stack", () => {
    myStack.push("udemy");
    expect(myStack.show()).toStrictEqual(["udemy", "google"]);
  });

  it("peeks at top element in stack", () => {
    expect(myStack.peek()).toBe("udemy");
  });

  it("pops top element from stack", () => {
    expect(myStack.pop()).toBe("udemy");
  });
});
