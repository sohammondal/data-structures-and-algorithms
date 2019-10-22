import { HashTable } from "./hash-table";
const myHashTable = new HashTable(50);

test('myHashTable an instance of HashTable?', () => expect(myHashTable).toBeInstanceOf(HashTable));

describe('Testing various HashTable functions', () => {
    describe('Does _hash fn always return a number less than Table size?', () => {
        it('test with grapes as key', () => expect(myHashTable._hash('grapes')).toBeLessThan(myHashTable.size));
        it('test with averrrrrrylongstring as key', () => expect(myHashTable._hash('averrrrrrylongstring')).toBeLessThan(myHashTable.size))
    })

    describe('Does set fn work as expected?', () => {
        it('sets a new key,value pair', () => {
            expect(myHashTable.set('grapes', 100)).toBe(undefined);
            expect(myHashTable.set('apples', 9)).toBe(undefined);
        })
        it('throws error when key in null/undefined', () => {
            expect(() => myHashTable.set(null, 100)).toThrowError(new Error('Key must be a string.'));
        })
    })

    describe('Does get fn work as expected?', () => {
        it('gets a value of grapes key', () => {
            expect(myHashTable.get('grapes')).toBe(100);
        })
        it('returns undefined if key doesn\'t exist', () => {
            expect(myHashTable.get('banana')).toBe(undefined);
        })
    })

    describe('Does keys & values fn work as expected?', () => {
        it('returns the keys grapes,apples', () => {
            expect(myHashTable.keys()).toStrictEqual(['grapes', 'apples']);
        })

        it('returns the values 100,9', () => {
            expect(myHashTable.values()).toStrictEqual([100, 9]);
        })
    })
})