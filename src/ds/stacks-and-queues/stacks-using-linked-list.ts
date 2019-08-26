class _Node {
  value: string | number = "";
  next: null | _Node = null;
  constructor(value: string | number) {
    this.value = value;
  }
}

export class Stack {
  top: null | _Node;
  bottom: null | _Node;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {}
  push(value) {}
  pop() {}
  isEmpty() {}
}
