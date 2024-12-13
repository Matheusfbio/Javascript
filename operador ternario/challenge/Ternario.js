// 1. **Desafio 1:**
//    Escreva uma função que receba dois números como parâmetros. Usando o operador ternário, faça com que a função retorne o maior número entre os dois. Se ambos os números forem iguais, retorne a string "Números iguais".

// /**
//  * Represent the parameters of the function theMostNumber
//  *
//  * @param {number} a
//  * @param {number} b
//  */

// function theMostNumber(a, b) {
//   const mostNumber = a === b ? "Ambos são iguais" : a > b ? a : b;
//   return mostNumber;
// }

// console.log(theMostNumber(12, 5));

// 2. **Desafio 2:**
//    Crie uma função que receba uma string como parâmetro e, usando o operador ternário, retorne "Maiúscula" se a string começar com uma letra maiúscula e "Minúscula" se começar com uma letra minúscula.

/**
 * Represent the parameters of the function checkString
 *
 * @param {string} str
 */
const checkFirstLetterCase = (str) =>
  str.length === 0
    ? "String vazia"
    : str.charAt(0) === str.charAt(0).toUpperCase()
    ? "Maiúscula"
    : "Minúscula";

console.log(checkFirstLetterCase("Hello")); // Primeira letra é maiúscula
console.log(checkFirstLetterCase("hello")); // Primeira letra é minúscula
console.log(checkFirstLetterCase("")); // String vazia
