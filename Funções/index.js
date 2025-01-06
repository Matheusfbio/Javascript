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

function sum(...values) {
  let res = 0;
  for (let value of values) {
    res += value;
  }
  return res;
}

console.log(sum(1, 2, 3, 6));

// modules.exports = { sum };
