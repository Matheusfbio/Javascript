// 1. **Desafio 1:** ✅✅✅
//    Escreva uma função que receba um valor como parâmetro. Usando o operador `typeof`, faça com que a função retorne "É uma string" se o valor for do tipo `string`, "É um número" se for do tipo `number`, e "Tipo não identificado" para qualquer outro tipo de dado.

// function TypeOfValue(value) {
//   if (typeof value === "string") {
//     return "é uma string";
//   } else if (typeof value === "number") {
//     return "é um número";
//   } else {
//     return "tipo nao indentificado";
//   }
// }

// const input = true;
// console.log(TypeOfValue(input));

// 2. **Desafio 2:** ✅✅✅
//    Crie uma função que receba dois parâmetros. Usando o operador `typeof`, verifique se ambos os parâmetros são do tipo `boolean`. Se forem, retorne "Ambos são booleanos", caso contrário, retorne "Pelo menos um não é booleano".

// function TypeOfValueTwoArgument(value1, value2) {
//   if (typeof value1 === "boolean" && typeof value2 === "boolean")
//     return "Ampos são booleanos";

//   if (typeof value1 === "boolean" || typeof value2 === "boolean")
//     return "Pelo menos um dos valores é booleano";
// }

// const input1 = 2;
// const input2 = true;
// console.warn(TypeOfValueTwoArgument(input1, input2));
