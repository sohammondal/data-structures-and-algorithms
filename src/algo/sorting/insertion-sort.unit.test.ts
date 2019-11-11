import { insertionSort } from "./insertion-sort";
test('is numbers array sorted?', () => expect(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])).toStrictEqual([0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]));
test('is string array sorted?', () => expect(insertionSort(['d', 'a', 'c', 'e', 'b'])).toStrictEqual(['a', 'b', 'c', 'd', 'e']));