const positivoNegativo = require('./positivoNegativo')

test('4 es positivo', () => {
    console.log = jest.fn();
    positivoNegativo(4)

    expect(console.log).toHaveBeenCalledWith('4 es positivo');
});

test('0 es cero', () => {
    console.log = jest.fn();
    positivoNegativo(0)

    expect(console.log).toHaveBeenCalledWith('0 es cero');
});

test('-5 es negativo', () => {
    console.log = jest.fn();
    positivoNegativo(-5)

    expect(console.log).toHaveBeenCalledWith('-5 es negativo');
});
