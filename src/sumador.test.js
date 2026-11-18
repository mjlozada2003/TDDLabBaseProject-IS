import sumar from "./sumador.js";

describe("Sumar", () => { //describe agrupa pruebas como una clase sumar
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia sumar adecuadamente con 0", () => {
    expect(sumar(0, 2)).toEqual(2);
  })
});


