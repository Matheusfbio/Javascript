//Function Constructor

// function Person(name, lastname) {
//   this.name = name;
//   this.lastname = lastname;
// }

// const person1 = new Person("Matheus", "Fabio");
// const person2 = new Person("Lucy", "Gomes");

// console.log(person1.name, person1.lastname);
// console.log(person2.name, person2.lastname);

// // The diferent between the function factory and function constructor is ,
// // function constructor, you have that to do the function at pascal case and calling with "new" + name of your function
// // always as function factory the function can be write in camel case and you call this function in anywhere varible

//----------------------------------------------------------------

//Function factory

// function criaPessoa(name, lastname, w, h) {
//   return {
//     name,
//     lastname,
//     speak(about) {
//       return `${this.name} is ${about}.`;
//     },
//     weight: w,
//     height: h,
//     imc() {
//       const indice = this.height / this.weight ** 2;
//       return indice.toFixed(2);
//     },
//   };
// }

// const p1 = criaPessoa("Matheus", "Fabio", 2.7, 92);
// console.log(p1.imc());

//----------------------------------------------------------------

//functions

//# Creating an function

// function Saudacao(Nome) {
//   console.log(`Bom dia ${Nome}!`);
// }

// Saudacao("Matheus");

//# Fuction with the to call of the variable

// function Saudacao(Nome) {
//   return `Bom dia ${Nome}!`;
// }

// const varSaudacao = Saudacao("Lucyellici");
// console.log(varSaudacao);

//# Using the function to sum two value

// function Soma(x, y) {
//   const result = x + y;
//   return result;
// }

// const result = Soma(12, 12);
// console.log(result);

//functions starting with value default

// function Soma(x = null, y = null) {
//   const result = x + y;
//   return result;
// }

// const result = Soma();
// console.log(result);

// arrow function more used

// const Raiz = (n) => {
//   return n ** 0.5;
// };

// arrow function less used
// const Raiz = (n) => n ** 0.5;

// console.log(Raiz(9));
// console.log(Raiz(16));
// console.log(Raiz(25));

//-----

// Function with rest parameters

// function sum(...values) {
//   let res = 0;
//   for (let value of values) {
//     res += value;
//   }
//   return res;
// }

// console.log(sum(1, 2, 3, 6, 5));

// Anonim Function
// const func = function (param1, param2, param3) {
//   return `${param1} ${param2} ${param3}\n${param1} ${param2} ${param3}\n${param1} ${param2} ${param3}`;
// };

// console.log(func(12, 33, 22));

// // modules.exports = { sum };

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// const numeros = [1, 2, 3, 4, 5, 6];

// function calcularSomaCondicional(numeros, condicao) {
//   return numeros.reduce((prevValue, numero) => {
//     if (condicao(numero)) {
//       return prevValue + numero;
//     }
//     return prevValue;
//   }, 0);
// }
// // Apenas soma os números pares
// const somaPares = calcularSomaCondicional(
//   numeros,
//   (numero) => numero % 2 === 0
// );
// console.log(somaPares); // Saída: 12

// // Apenas soma os números maiores que 3
// const somaMaioresQueTres = calcularSomaCondicional(
//   numeros,
//   (numero) => numero > 3
// );
// console.log(somaMaioresQueTres); // Saída: 15
const sumOddNumbers = function (numbers) {
  return numbers
    .filter((num) => num % 2 !== 0)
    .reduce((sum, num) => sum + num, 0);
};

// Teste
console.log(sumOddNumbers([1, 2, 3, 4, 5, 6, 1])); // Saída: 9 (1 + 3 + 5)
