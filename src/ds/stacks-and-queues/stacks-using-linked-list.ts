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
  show() {
    let temp = this.top,
      res = [];
    while (temp) {
      res.push(temp.value);
      temp = temp.next;
    }
    return res;
  }
  peek() {
    return this.top.value;
  }
  push(value: number | string) {
    const node = new _Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length += 1;
  }
  pop() {
    const temp = this.top.value;
    this.top = this.top.next;
    this.length -= 1;
    if (this.length === 0) {
      this.bottom = null;
    }
    return temp;
  }
  isEmpty() {
    return this.length === 0;
  }
}
