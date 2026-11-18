import dividir from "./dividir.js";

describe("Dividir", () => { //describe agrupa pruebas como una clase sumar
  it("deberia dividir dos numeros enteros", () => {
    expect(dividir(6, 2)).toEqual(3);
  });

});


