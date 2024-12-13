// arquivo: soma.test.js

const { calcularSoma } = require("./index");

test("calcula a soma de números positivos até encontrar um número negativo", () => {
  const numeros = [10, 20, 30, -1, 50];
  const resultado = calcularSoma(numeros);
  expect(resultado).toBe(60); // Soma de 10 + 20 + 30
});

test("retorna 0 se o primeiro número for negativo", () => {
  const numeros = [-1, 10, 20];
  const resultado = calcularSoma(numeros);
  expect(resultado).toBe(0);
});

test("soma todos os números se não houver números negativos", () => {
  const numeros = [5, 15, 25];
  const resultado = calcularSoma(numeros);
  expect(resultado).toBe(45); // Soma de 5 + 15 + 25
});
