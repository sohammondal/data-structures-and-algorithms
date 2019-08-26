class _Node {
  value: string | number = "";
  next: null | _Node = null;
  constructor(value: string | number) {
    this.value = value;
  }
}

export class LinkedList {
  head: null | _Node = null;
  tail: null | _Node = null;
  length: number = 0;
  constructor(value: string | number) {
    this.head = new _Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  show(head) {
    let list = [],
      temp = head;
    while (temp) {
      list.push(temp.value);
      temp = temp.next;
    }
    return list;
  }

  traverseToIndex(index: number) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  append(value: string | number) {
    if (value) {
      const newNode = new _Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      throw new Error("Value cannot be " + typeof value);
    }
  }

  prepend(value: string | number) {
    if (value) {
      const newNode = new _Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    } else {
      throw new Error("Value cannot be " + typeof value);
    }
  }

  insert(index: number, value: string | number) {
    if (index && value) {
      let newNode = new _Node(value);
      if (index > this.length) {
        this.append(value);
      } else {
        let prev = this.traverseToIndex(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
      }
      return this;
    } else {
      if (!index && !value) {
        throw new Error("Index and Value cannot be null/undefined");
      }
      if (index) {
        throw new Error("Value cannot be " + typeof value);
      }
      if (value) {
        throw new Error("Index cannot be " + typeof index);
      }
    }
  }

  remove(index: number) {
    if (isNaN(index)) {
      throw new Error("Index cannot be " + typeof index);
    }
    let prev = this.traverseToIndex(index - 1); // previous node
    prev.next = prev.next.next;
    this.length--;
  }

  reverse() {
    let node = this.head,
      prev = null,
      temp;
    while (node) {
      // save next before overwriting node.next
      temp = node.next;

      //reverse pointer
      node.next = prev;

      //step forward in list
      prev = node;
      node = temp;
    }
    let reversedList = new LinkedList(prev.value);
    reversedList.head = prev;
    reversedList.tail = new _Node(this.head.value);
    reversedList.length = this.length;
    return reversedList;
  }
}
