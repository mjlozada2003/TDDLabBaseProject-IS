import multiplicar from "./multiplicador.js";

describe("Multiplicar",() => {
    it("deberia multiplicar dos numeros" ,() =>{
        expect (multiplicar(5,10)).toEqual(50);
    });
    it("deberia multiplicar por cero" ,() =>{
        expect (multiplicar(5,0)).toEqual(0);
    });
})