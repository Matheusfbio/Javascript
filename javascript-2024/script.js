//Promise WithResolvers
//Modo que era mais usado
const promessaTest = new Promise((resolve, reject) => {
  //Chama o method aqui
});

//Agora, poder ser chamado em qualquer lugar do codigo
const { promise, resolve, reject } = Promise.withResolvers();

promise
  .then((value) => {
    console.log("Promise executed with success! " + value);
  })
  .catch((error) => {
    console.error("Promise executed with error");
  });

// resolve("Resolve");

// Métodos de array
// Permanencia do array original, não modificam o array original
const numbers = [5, 4, 3, 2, 1];

const numbersOrdenary = numbers.toSorted();

console.log(numbers);
console.log(numbersOrdenary);

// toSpliced = splice

const list = [1, 2, 3, 4, 5];

const listModifications = list.toSpliced(1, 2, "abc", "def");

console.log(list, listModifications);

const listInverse = list.toReversed();

console.log(listInverse);

//GroupBy
const getPeople = [
  { name: "Charlie Oliver", age: 74 },
  { name: "Stanley Curtis", age: 34 },
  { name: "Birdie Turner", age: 04 },
];

const groupPeople = Object.groupBy(getPeople, (getPerson) => getPerson.age);

console.log(groupPeople);

//Temporal => Api para Datas

const dateToday = Temporal.Now.plainDateISO();

console.log(dateToday.toString());

const dateNatal = Temporal.PlainDate.from({ year: 2024, month: 12, day: 25 });

const daysForNatal = dateToday.until(dateNatal).days;

console.log(daysForNatal);

//Set metodos => união, intersecção, diferente

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

//Set Union
const uniao = setA.union(setB);

console.log(uniao);
//Set difference
console.log(setA.difference(setB));
//Set Intersection
console.log(setA.intersection(setB));

//import nativo

import config from "../javascript-2024/config.json" assert { type: "json" };

console.log(config.server);
console.log(config.maxConnections);
