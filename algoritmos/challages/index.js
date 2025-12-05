// Dado um array de números, retorne apenas os números pares.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log(evenNumbers);

// --------------------------------------

// Some os valores de um array usando reduce.
// const numbers = [1, 2, 3, 4, 5];
// const sumValue = numbers.reduce((acc, cur) => acc + cur)

// console.log(`Resultado: ${sumValue}`);


// Encontre um usuário por ID em uma lista de objetos.

// const users = [{ "ID": 1, "nome": "Ana", "idade": 20 }, { "ID": 2, "nome": "Bia", "idade": 25 }, { "ID": 3, "nome": "Carlos", "idade": 30 }];

// const findUserById = users.find((user) => user.ID === 3)

// console.log(findUserById)

// Remova todos os valores duplicados sem usar Set.
// const numbers = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10];

// const uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index);

// console.log(uniqueNumbers);

// Conte quantos nomes começam com a letra “A”.
// const users = [{ "ID": 1, "nome": "Ana", "idade": 20 }, { "ID": 2, "nome": "Analice", "idade": 25 }, { "ID": 3, "nome": "Carlos", "idade": 30 }];

// const totalNameStartedwithWordA = users.reduce((acc, n) => {
//   if (n.nome.startsWith("A")) {
//     return acc + 1;
//   }
//   return acc;
// }, 0);

// console.log(totalNameStartedwithWordA);

// Implemente um map do zero.
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Exemplo de uso:
const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.myMap((num) => num * 2);
console.log(numbers); // [2, 4, 6, 8, 10]