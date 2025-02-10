// create class
class Pessoa {
  // Class properties
  #id; //# Means the propertie is private
  name;
  gener;
  contat;

  constructor(id, name, gener, contat) {
    this.#id = id;
    this.name = name;
    this.gener = gener;
    this.contat = contat;
  }
  // Methods class
  speak() {
    console.log(
      `Name: ${this.name}, Id: ${this.#id}, Gener: ${this.gener}, Contact: ${
        this.contat
      }`
    );
  }
  walk() {}
  jump() {}

  set id(id) {
    this.#id = id;
  }
}

const pessoa1 = new Pessoa("122", "Matheus", "Masculino", "12333138881");
const pessoa2 = new Pessoa("122", "Joao", "Masculino", "12333138881");

// pessoa1.id = 1111123;
pessoa1.speak();
pessoa2.speak();
