import { quickSort } from "./quick-sort";
test('is numbers array sorted?', () => {
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
    expect(quickSort(numbers, 0, numbers.length - 1)).toStrictEqual([0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]);
});
test('is string array sorted?', () => {
    const strings = ['d', 'a', 'c', 'e', 'b'];
    expect(quickSort(strings, 0, strings.length - 1)).toStrictEqual(['a', 'b', 'c', 'd', 'e']);
});