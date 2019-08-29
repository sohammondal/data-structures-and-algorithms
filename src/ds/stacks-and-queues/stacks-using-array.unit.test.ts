import { Stack } from "./stacks-using-arrays";

describe("Testing Stacks using Arrays", () => {
  const myStack = new Stack();

  it("pushes google to stack", () => {
    myStack.push("google");
    expect(myStack.show()).toStrictEqual(["google"]);
  });

  it("pushes udemy to stack", () => {
    myStack.push("udemy");
    expect(myStack.show()).toStrictEqual(["google", "udemy"]);
  });

  it("peeks at top element in stack", () => {
    expect(myStack.peek()).toBe("udemy");
  });

  it("pops top element from stack", () => {
    expect(myStack.pop()).toBe("udemy");
  });

  it("reads the lenght of the stack", () => {
    expect(myStack.length).toBe(1);
  });

  it("throws error when pushed a null value", () => {
    expect(() => myStack.push(null)).toThrowError(
      new Error("value cannot be " + typeof null)
    );
  });
});
