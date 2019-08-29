class _Node {
  value: string | number;
  next: null | _Node;
  constructor(value: string | number) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  first: null | _Node;
  last: null | _Node;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  show() {
    let node = this.first;
    const arr = [];
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }

  peek() {
    return this.first ? this.first.value : null;
  }

  enqueue(value) {
    if (value) {
      const node = new _Node(value);
      if (this.length > 0) {
        this.last.next = node;
        this.last = node;
      } else {
        this.first = node;
        this.last = node;
      }
      this.length++;
    } else {
      throw new Error("Value cannot be " + value);
    }
  }

  dequeue() {
    if (this.first) {
      const temp = this.first.value;
      this.first = this.first.next;
      this.length--;
      return temp;
    } else {
      throw new Error("Cannot dequeue an empty queue");
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}
