import { reverseStringIterative, reverseStringRecursive } from './reverse-string';
test('reverse string iteratively', () => expect(reverseStringIterative('tacocat')).toBe('tacocat'))
test('reverse string recursively', () => expect(reverseStringRecursive('tacocat')).toBe('tacocat'))