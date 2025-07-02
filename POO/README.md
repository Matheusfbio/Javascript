Claro, Matheus! Vamos aprender **tudo sobre Programação Orientada a Objetos (POO) em JavaScript**.
Abaixo está um **guia completo e didático**, com teoria, exemplos e boas práticas.

---

## 🧠 O que é POO?

POO é um paradigma de programação baseado em **objetos**, que representam entidades com:

- **Atributos (dados, propriedades)**
- **Métodos (funções que realizam ações)**

POO ajuda a organizar, reutilizar e manter o código.

---

## 📚 1. **Objetos Literais**

Forma básica de representar objetos em JS:

```js
const pessoa = {
  nome: "Ana",
  idade: 25,
  falar() {
    console.log(`Oi, meu nome é ${this.nome}`);
  },
};

pessoa.falar(); // Oi, meu nome é Ana
```

---

## 📚 2. **Funções Construtoras (pré-ES6)**

```js
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.falar = function () {
    console.log(`Oi, sou ${this.nome}`);
  };
}

const p1 = new Pessoa("João", 30);
p1.falar(); // Oi, sou João
```

---

## 📚 3. **Classes (ES6+)**

```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Oi, sou ${this.nome}`);
  }
}

const p2 = new Pessoa("Maria", 22);
p2.falar(); // Oi, sou Maria
```

---

## 📘 4. **Pilares da POO em JavaScript**

### 🔹 1. Encapsulamento

Protege os dados internos de um objeto.

```js
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
```

---

### 🔹 2. Herança

Permite criar novas classes baseadas em outras.

```js
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("Au au!");
  }
}

const rex = new Cachorro("Rex");
rex.emitirSom(); // Au au!
```

---

### 🔹 3. Polimorfismo

Mesma interface, diferentes comportamentos.

```js
const animais = [new Cachorro("Rex"), new Animal("Bicho")];

animais.forEach((a) => a.emitirSom());
// Au au!
// Som genérico
```

---

### 🔹 4. Abstração

Oculta detalhes e mostra apenas o necessário.

```js
class API {
  #token = "secreto";

  chamar(endpoint) {
    console.log(`Chamando ${endpoint} com token interno`);
  }
}

const api = new API();
api.chamar("/users"); // Chamando /users com token interno
```

---

## 🔧 5. Métodos Estáticos

Usados sem instanciar a classe.

```js
class Matematica {
  static somar(a, b) {
    return a + b;
  }
}

console.log(Matematica.somar(2, 3)); // 5
```

---

## 🧩 6. Propriedades Getters e Setters

Permite **controlar acesso** a atributos.

```js
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

const p = new Produto("Celular", 1000);
console.log(p.preco); // 1000.00
p.preco = 1500;
console.log(p.preco); // 1500.00
```

---

## 💡 7. Prototypes (Avançado)

JavaScript é baseado em **prototype-based inheritance**:

```js
function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.falar = function () {
  console.log(`Oi, sou ${this.nome}`);
};

const joao = new Pessoa("João");
joao.falar(); // Oi, sou João
```

---

## 🧪 8. Composição vs Herança

### Herança

```js
class Veiculo {
  ligar() {}
}
class Carro extends Veiculo {
  andar() {}
}
```

### Composição (preferido em alguns casos)

```js
const ligarMixin = {
  ligar() {
    console.log("Ligando...");
  },
};

const carro = Object.assign({}, ligarMixin, {
  andar() {
    console.log("Andando...");
  },
});

carro.ligar(); // Ligando...
carro.andar(); // Andando...
```

---

## 📝 9. Boas Práticas de POO em JS

✅ Separe responsabilidades em classes diferentes
✅ Evite acoplamento entre classes
✅ Prefira composição a herança quando possível
✅ Use métodos privados para proteger regras de negócio
✅ Use `get/set` quando precisar validar atributos

---

## 📦 10. Exemplo Completo com Todos os Conceitos

```js
class Usuario {
  #senha;

  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.#senha = senha;
  }

  autenticar(senha) {
    return this.#senha === senha;
  }

  get info() {
    return `${this.nome} <${this.email}>`;
  }
}

class Admin extends Usuario {
  deletarUsuario(user) {
    console.log(`${user.nome} foi deletado.`);
  }
}

const user1 = new Usuario("Matheus", "matheus@email.com", "123456");
const admin = new Admin("Admin", "admin@email.com", "admin123");

console.log(user1.info); // Matheus <matheus@email.com>
console.log(user1.autenticar("123456")); // true
admin.deletarUsuario(user1); // Matheus foi deletado.
```

---
