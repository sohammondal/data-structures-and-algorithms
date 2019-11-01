import { factorialIterative, factorialRecursive } from "./factorial";

test('checks factorial iteratively', () => {
    expect(factorialIterative(5)).toBe(120);
})

test('checks factorial recursively', () => {
    expect(factorialRecursive(5)).toBe(120);
})