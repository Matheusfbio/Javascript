
class Person {
  constructor(product_name, product_age) {
    this.name = product_name
    this.age = product_age
  }

  getName() {
    return this.name
  }
  setName() {
    this.name = name
  }

  getAge() {
    return this.age
  }
  setAge() {
    this.age = this.age
  }
  product_info() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`-------------------`);
  }
}

let pessoas = []

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
  const btn_add = document.querySelector("#btn_add")
  const res = document.querySelector(".res")

  // Verifica se os elementos existem
  if (!btn_add || !res) {
    console.error('Elementos não encontrados no DOM');
    return;
  }

  const addPessoa = () => {
    res.innerHTML = ""
    pessoas.forEach((p) => {
      const div = document.createElement("div")
      div.setAttribute("class", "pessoa")
      div.innerHTML = `Nome: ${p.getName()}<br/> Idade: ${p.getAge()}`
      res.appendChild(div)
    })
  }

  btn_add.addEventListener("click", () => {
    const name = document.querySelector("#f_name");
    const age = document.querySelector("#f_age");

    if (!name || !age) {
      console.error('Campos de input não encontrados');
      return;
    }

    const person = new Person(name.value, age.value);
    pessoas.push(person);
    name.value = ""
    age.value = ""
    name.focus()
    addPessoa()
  });
});