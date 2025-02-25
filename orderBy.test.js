const getFields = require('./getFields');

    test('should return an array of keys', () => {
        const array = [
            {
                name : 'a1',
                age : 1,
            },
            {
                name: 'a2',
                age : 2,
            },
        ];

        const expected = [1, 2];

        expect(getFields(array, 'age')).toStrictEqual(expected);
    });
