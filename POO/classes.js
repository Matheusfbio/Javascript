class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `as well class: Greetings, My name is ${this.name} and i have ${this.age} years old.`;
  }
}

const classPerson = new person("Matheus", 26);
console.log(classPerson.greeting());
//Greetings, My name is Matheus and i have 26 years old.

//antes do ES6 (Function Constructor)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greeting = function () {
  return `as well Function: Greetings, My name is ${this.name} and i have ${this.age} years old.`;
};

const functionPerson = new Person("Matheus", 26);
console.log(functionPerson.greeting());
//Greetings, My name is Matheus and i have 26 years old.
