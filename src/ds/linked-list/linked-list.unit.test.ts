import { LinkedList } from './linked-list';
const myLinkedList = new LinkedList(10);

test('is new object Instance of LinkedList', () => {
    expect(myLinkedList).toBeInstanceOf(LinkedList);
})

test('is append working', () => {
    const list = myLinkedList.append(1);
    expect(list.tail.value).toBe(1);
})