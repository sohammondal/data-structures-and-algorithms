import { fibonacciIterative, fibonacciRecursive } from './fibonacci';
test('check fibonacci iterative', () => expect(fibonacciIterative(6)).toBe(8))
test('check fibonacci iterative', () => expect(fibonacciIterative(0)).toBe(0))
test('check fibonacci recursive', () => expect(fibonacciRecursive(0)).toBe(0))
test('check fibonacci recursive', () => expect(fibonacciRecursive(6)).toBe(8))