const pessoa = {
  nome: 'Ana',
  idade: 25,
  falar() {
    console.log(`Oi, meu nome é ${this.nome}`);
  }
};

pessoa.falar(); // Oi, meu nome é Ana
