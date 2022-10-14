//# Creating a object => {} it's array => []

// const person1 = {
//   name: "Matheus",
//   lastname: "Fábio",
//   age: 23,
// };

// const person2 = {
//   name: "Lucyellici",
//   lastname: "Gomes",
//   age: 29,
// };

// console.log(person1.name + " " + person1.lastname);
// console.log(person2.name + " " + person2.lastname);

//# Now using functions

// function CreatePerson(name, lastname, age) {
//   return {
//     // name: name,
//     // lastname: lastname,
//     // age: age,
//     // you can to use this way also
//     name,
//     lastname,
//     age,
//   };
// }

// const person1 = CreatePerson("Matheus", "Fábio", 23);
// const person2 = CreatePerson("Lucyellici", "Gomes", 29);

// console.log(person1.name + " " + person1.lastname);
// console.log(person2.name + " " + person2.lastname);

const person1 = {
  name: "Matheus",
  lastname: "Fábio",
  age: 23,

  Speak() {
    console.log(`My age current is ${this.age}`);
  },

  incrementAge() {
    this.age++;
  },
};

person1.incrementAge();
person1.incrementAge();
person1.Speak();
