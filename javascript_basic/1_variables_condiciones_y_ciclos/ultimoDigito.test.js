const ultimoDigito = require('./ultimoDigito')

test('ultimo digito de 450', () => {
    console.log = jest.fn();
    ultimoDigito(450)

    expect(console.log).toHaveBeenCalledWith('El ultimo digito de 450 es 0 y es 0');
});

test('ultimo digito de 321', () => {
    console.log = jest.fn();
    ultimoDigito(321)

    expect(console.log).toHaveBeenCalledWith('El ultimo digito de 321 es 1 y es menor a 6 y no es 0');
});

test('ultimo digito de 39', () => {
    console.log = jest.fn();
    ultimoDigito(321)

    expect(console.log).toHaveBeenCalledWith('El ultimo digito de 39 es 9 y es mayor a 5');
});
