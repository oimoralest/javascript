const posiblesDosDigitos = require('./posiblesDosDigitos');

test('Posibles dos digitos', () => {
    console.log = jest.fn()

    posiblesDosDigitos();

    expect(console.log).toHaveBeenCalledWith('01, 02, 03, 04, 05, 06, 07, 08, 09, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 39, 45, 46, 47, 48, 49, 56, 57, 58, 59, 67, 68, 69, 78, 79, 89')
});
