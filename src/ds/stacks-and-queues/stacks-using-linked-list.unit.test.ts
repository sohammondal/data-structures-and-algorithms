import { Stack } from "./stacks-using-linked-list";

describe("checking operations using Stack", () => {
  const myStack = new Stack();
  it("is a instance of Stack", () => {
    expect(myStack).toBeInstanceOf(Stack);
  });
});
