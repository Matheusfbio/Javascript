function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

const person1 = new Person("Matheus", "Fabio");
const person2 = new Person("Lucy", "Gomes");

console.log(person1.name, person1.lastname);
console.log(person2.name, person2.lastname);

// The diferent between the function factory and function constructor is ,
// function constructor, you have that to do the function at pascal case and calling with "new" + name of your function
// always as function factory the function can be write in camel case and you call this function in anywhere varible
