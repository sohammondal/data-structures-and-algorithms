import { LinkedList } from './linked-list';
const myLinkedList = new LinkedList(10);

test('is new object Instance of LinkedList', () => {
    expect(myLinkedList).toBeInstanceOf(LinkedList);
})

test('is append() working', () => {
    let list = myLinkedList.append(5);
    expect(list.tail.value).toBe(5);
    list = myLinkedList.append(undefined);
    expect(list).toBeNull();
    list = myLinkedList.append(16);
    expect(list.tail.value).toBe(16);
})

test('is prepend() working', () => {
    let list = myLinkedList.prepend(1);
    expect(list.head.value).toBe(1);
})

test('is insert() working', () => {
    try {
        myLinkedList.insert(2, 99);
        console.log(myLinkedList.show());
        expect.arrayContaining(myLinkedList.show()).toEqual([1, 10, 99, 5]);
        myLinkedList.insert(2, 99);
    } catch (error) {
        expect(error.mesaage).toBe(undefined);
    }

})