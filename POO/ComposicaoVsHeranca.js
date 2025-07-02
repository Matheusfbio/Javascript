//Herança
class Veiculo { ligar() { } }
class Carro extends Veiculo { andar() { } }



//composição
const ligarMixin = {
  ligar() {
    console.log('Ligando...');
  }
};

const carro = Object.assign({}, ligarMixin, {
  andar() {
    console.log('Andando...');
  }
});

carro.ligar(); // Ligando...
carro.andar(); // Andando...
