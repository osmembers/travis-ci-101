const add = require('../src/add');

test('1 + 2 = 3', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});