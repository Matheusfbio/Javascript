class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this._preco = preco;
  }

  get preco() {
    return this._preco.toFixed(2);
  }

  set preco(valor) {
    if (valor > 0) this._preco = valor;
  }
}

const p = new Produto('Celular', 1000);
console.log(p.preco); // 1000.00
p.preco = 1500;
console.log(p.preco); // 1500.00
