class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Oi, sou ${this.nome}`);
  }
}

const p2 = new Pessoa('Maria', 22);
p2.falar(); // Oi, sou Maria
