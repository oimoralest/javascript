const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('add -5 + 2 to equal -3', () => {
    expect(sum(-5, 2)).toBe(-3);
})

test('add -5 + 5 to equal 0', () => {
    expect(sum(-5, 5)).toBe(0);
})
