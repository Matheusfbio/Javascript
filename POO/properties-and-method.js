//## Propriedades e Métodos
//
//### Propriedades de Instância

class Usuario {
  constructor(nome) {
    this.nome = nome; // Propriedade de instância
    this.ativo = true;
  }
}

// Métodos de Instância

class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }
}

const calc = new Calculadora();
console.log(calc.somar(5, 3)); // 8
