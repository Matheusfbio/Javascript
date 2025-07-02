function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.falar = function () {
  console.log(`Oi, sou ${this.nome}`);
};

const joao = new Pessoa('João');
joao.falar(); // Oi, sou João
