const numerosNaturales = require("./numerosNaturales");

test('Numeros naturales', () => {
    console.log = jest.fn()

    numerosNaturales();

    expect(console.log).toHaveBeenCalledWith('01235689');
});
