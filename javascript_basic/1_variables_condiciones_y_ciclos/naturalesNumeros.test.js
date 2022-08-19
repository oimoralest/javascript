const naturalesNumeros = require("./naturalesNumeros");

test('Naturales numeros', () => {
    console.log = jest.fn();

    naturalesNumeros();

    expect(console.log).toHaveBeenCalledWith('9876543210');
});
