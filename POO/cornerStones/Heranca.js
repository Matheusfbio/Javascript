class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log('Som genérico');
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log('Au au!');
  }
}

const rex = new Cachorro('Rex');
rex.emitirSom(); // Au au!

