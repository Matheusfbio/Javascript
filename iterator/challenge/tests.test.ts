// index.test.js
const createIteratorPar = require("../challenge/index.js");

describe("simple test", () => {
  test("itera até 0 se limite for 0", () => {
    const resultado = Array.from(createIteratorPar(0));
    expect(resultado).toEqual([0]);
  });

  test("itera até 1 se limite for 1", () => {
    const resultado = Array.from(createIteratorPar(1));
    expect(resultado).toEqual([0]);
  });

  test("itera até 2 se limite for 2", () => {
    const resultado = Array.from(createIteratorPar(2));
    expect(resultado).toEqual([0, 2]);
  });

  test("itera até um número ímpar grande", () => {
    const resultado = Array.from(createIteratorPar(11));
    expect(resultado).toEqual([0, 2, 4, 6, 8, 10]);
  });

  test("itera até um número par grande", () => {
    const resultado = Array.from(createIteratorPar(12));
    expect(resultado).toEqual([0, 2, 4, 6, 8, 10, 12]);
  });

  test("itera até um limite negativo grande", () => {
    const resultado = Array.from(createIteratorPar(-100));
    expect(resultado).toEqual([]);
  });

  test("itera até um limite não inteiro", () => {
    const resultado = Array.from(createIteratorPar(5.9));
    expect(resultado).toEqual([0, 2, 4]);
  });

  test("itera até um limite NaN", () => {
    const resultado = Array.from(createIteratorPar(NaN));
    expect(resultado).toEqual([]);
  });

  test("itera até um limite undefined", () => {
    const resultado = Array.from(createIteratorPar(undefined));
    expect(resultado).toEqual([0]);
  });

  test("itera até um limite null", () => {
    const resultado = Array.from(createIteratorPar(null));
    expect(resultado).toEqual([0]);
  });
});
