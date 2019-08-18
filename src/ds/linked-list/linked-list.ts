class _Node {
    value: string | number = '';
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

    returnList() {
        let list = [], temp = this.head;
        while (temp) {
            list.push(temp.value);
            temp = temp.next;
        }
        return list;
    }

    append(value: string | number) {
        const newNode = new _Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

}
