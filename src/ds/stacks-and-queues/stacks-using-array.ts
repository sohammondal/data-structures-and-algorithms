export class Stack {
  private array: Array<string | number>;
  length: number;

  constructor() {
    this.array = [];
    this.length = 0;
  }

  show() {
    return this.array;
  }
  push(value: number | string) {
    if (value) {
      this.array.push(value);
      this.length += 1;
    } else {
      throw new Error("value cannot be " + typeof value);
    }
  }
  pop() {
    if (this.length > 0) {
      let value = this.array.pop();
      this.length -= 1;
      return value;
    }
    return null;
  }
  peek() {
    return this.length > 0 ? this.array[this.length - 1] : null;
  }
  isEmpty() {
    return this.length === 0;
  }
}
