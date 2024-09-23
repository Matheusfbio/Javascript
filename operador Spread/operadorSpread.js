// 1. **Desafio 1:**
//    Crie uma função que receba dois arrays como parâmetros. Usando o operador spread, retorne um novo array que contenha todos os elementos dos dois arrays combinados, sem modificar os arrays originais.

function spreadArray(array1, array2) {
  console.warn("Spread Array");
  const allArray = [...array1, ...array2];

  allArray.forEach((el) => {
    console.warn(el);
  });
}

const Array1 = [1, 2, 3, 4];
const Array2 = [5, 6, 7, 8];
spreadArray(Array1, Array2);

//Two forms
// function spreadArray(array1, array2) {
//   console.warn("Spread Array");
//   const allArray = [...array1, ...array2];

//   return allArray;
//   // allArray.forEach((el) => {
//   //   console.warn(el);
//   // });
// }

// const Array1 = [1, 2, 3, 4];
// const Array2 = [5, 6, 7, 8];

// const result = spreadArray(Array1, Array2);
// console.warn(result);

// 2. **Desafio 2:**
//    Escreva uma função que receba um objeto e um conjunto de propriedades adicionais. Usando o operador spread, retorne um novo objeto que combine as propriedades do objeto original com as propriedades adicionais passadas para a função.
