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

    show() {
        let list = [], temp = this.head;
        while (temp) {
            list.push(temp.value);
            temp = temp.next;
        }
        return list;
    }

    traverseToIndex(index: number) {
        let node = this.head;
        for (let i = 0; i <= index; i++) {
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
        }
        return null;
    }

    prepend(value: string | number) {
        if (value) {
            const newNode = new _Node(value);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
        return null;
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
            if (index) throw new Error('Value cannot null/undefinded');
            if (value) throw new Error('Index cannot null/undefinded');
        }
    }
}
