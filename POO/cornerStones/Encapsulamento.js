class Conta {
  #saldo = 0; // atributo privado

  depositar(valor) {
    if (valor > 0) this.#saldo += valor;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const c1 = new Conta();
c1.depositar(100);
console.log(c1.verSaldo()); // 100
// console.log(c1.#saldo); // ❌ Erro: propriedade privada
