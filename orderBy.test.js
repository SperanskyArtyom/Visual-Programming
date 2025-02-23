const orderBy = require('./orderBy');

describe('orderBy', () => {
    test('should sort array of objects by specified properties', () => {
        const array = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
            { name: 'Alice', age: 25 },
        ];

        const expected = [
            { name: 'Alice', age: 25 },
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
        ];

        expect(orderBy(array, ['name', 'age'])).toStrictEqual(expected);
    });

    test('should throw error if first argument is not an array of objects', () => {
        expect(() => orderBy(null, ['name'])).toThrow('First argument should be an Array of objects');
        expect(() => orderBy([1, 2, 3], ['name'])).toThrow('First argument should be an Array of objects');
        expect(() => orderBy([{}, {}, 'not an object'], ['name'])).toThrow('First argument should be an Array of objects');
    });

    test('should throw error if property is not present in all objects', () => {
        const array = [
            { name: 'Alice', age: 30 },
            { name: 'Alice' },  // Нет свойства age
        ];

        expect(() => orderBy(array, ['name', 'age'])).toThrow(`Not every object contains the property 'age'`);
    });
});