// pre ES6
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.falar = function () {
    console.log(`Oi, sou ${this.nome}`);
  };
}

const p1 = new Pessoa('João', 30);
p1.falar(); // Oi, sou João
