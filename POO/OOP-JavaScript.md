# Programação Orientada a Objetos (OOP) em JavaScript

## Índice
1. [Classes](#classes)
2. [Construtores](#construtores)
3. [Propriedades e Métodos](#propriedades-e-métodos)
4. [Encapsulamento](#encapsulamento)
5. [Herança](#herança)
6. [Polimorfismo](#polimorfismo)
7. [Abstração](#abstração)
8. [Getters e Setters](#getters-e-setters)
9. [Métodos Estáticos](#métodos-estáticos)
10. [Prototype](#prototype)
11. [Composição vs Herança](#composição-vs-herança)

---

## Classes

Classes são templates para criar objetos. Introduzidas no ES6 (2015).

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, sou ${this.nome} e tenho ${this.idade} anos`;
  }
}

const pessoa1 = new Pessoa('João', 25);
console.log(pessoa1.apresentar()); // Olá, sou João e tenho 25 anos
```

### Antes do ES6 (Function Constructor)

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.apresentar = function() {
  return `Olá, sou ${this.nome}`;
};
```

---

## Construtores

O método `constructor` é chamado automaticamente ao criar uma instância.

```javascript
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    return 'Carro ligado';
  }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2023);
```

---

## Propriedades e Métodos

### Propriedades de Instância

```javascript
class Usuario {
  constructor(nome) {
    this.nome = nome; // Propriedade de instância
    this.ativo = true;
  }
}
```

### Métodos de Instância

```javascript
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
```

---

## Encapsulamento

Proteger dados internos e expor apenas o necessário.

### Propriedades Privadas (# - ES2022)

```javascript
class ContaBancaria {
  #saldo = 0; // Propriedade privada

  constructor(titular) {
    this.titular = titular;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  #validarSaque(valor) { // Método privado
    return valor > 0 && valor <= this.#saldo;
  }

  sacar(valor) {
    if (this.#validarSaque(valor)) {
      this.#saldo -= valor;
      return true;
    }
    return false;
  }

  getSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria('Maria');
conta.depositar(1000);
console.log(conta.getSaldo()); // 1000
// console.log(conta.#saldo); // Erro: propriedade privada
```

### Convenção com _ (antes do ES2022)

```javascript
class Produto {
  constructor(nome, preco) {
    this._nome = nome;
    this._preco = preco; // Convenção: _ indica privado
  }

  getPreco() {
    return this._preco;
  }
}
```

---

## Herança

Uma classe pode herdar propriedades e métodos de outra usando `extends`.

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    return 'Som genérico';
  }

  mover() {
    return `${this.nome} está se movendo`;
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da classe pai
    this.raca = raca;
  }

  emitirSom() {
    return 'Au au!';
  }

  buscar() {
    return `${this.nome} está buscando a bolinha`;
  }
}

class Gato extends Animal {
  emitirSom() {
    return 'Miau!';
  }
}

const dog = new Cachorro('Rex', 'Labrador');
console.log(dog.emitirSom()); // Au au!
console.log(dog.mover()); // Rex está se movendo
console.log(dog.buscar()); // Rex está buscando a bolinha

const cat = new Gato('Mimi');
console.log(cat.emitirSom()); // Miau!
```

### Super

```javascript
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario);
    this.departamento = departamento;
  }

  calcularBonus() {
    return super.calcularBonus() * 2; // Chama método da classe pai
  }
}

const gerente = new Gerente('Ana', 5000, 'TI');
console.log(gerente.calcularBonus()); // 1000
```

---

## Polimorfismo

Objetos de diferentes classes podem ser tratados de forma uniforme.

```javascript
class Forma {
  calcularArea() {
    return 0;
  }
}

class Retangulo extends Forma {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }
}

const formas = [
  new Retangulo(5, 10),
  new Circulo(7),
  new Retangulo(3, 4)
];

formas.forEach(forma => {
  console.log(`Área: ${forma.calcularArea()}`);
});
```

---

## Abstração

Esconder complexidade e mostrar apenas o essencial.

```javascript
class SistemaEmail {
  #servidor;
  #porta;

  constructor(config) {
    this.#servidor = config.servidor;
    this.#porta = config.porta;
  }

  #conectar() {
    // Lógica complexa de conexão
    return true;
  }

  #autenticar() {
    // Lógica de autenticação
    return true;
  }

  #formatarMensagem(destinatario, assunto, corpo) {
    return { destinatario, assunto, corpo, data: new Date() };
  }

  enviarEmail(destinatario, assunto, corpo) {
    // Interface simples para o usuário
    this.#conectar();
    this.#autenticar();
    const mensagem = this.#formatarMensagem(destinatario, assunto, corpo);
    console.log('Email enviado:', mensagem);
  }
}

const email = new SistemaEmail({ servidor: 'smtp.gmail.com', porta: 587 });
email.enviarEmail('user@example.com', 'Teste', 'Olá!');
```

---

## Getters e Setters

Controlam o acesso e modificação de propriedades.

```javascript
class Pessoa {
  constructor(nome, anoNascimento) {
    this._nome = nome;
    this._anoNascimento = anoNascimento;
  }

  get nome() {
    return this._nome.toUpperCase();
  }

  set nome(novoNome) {
    if (novoNome.length > 2) {
      this._nome = novoNome;
    }
  }

  get idade() {
    return new Date().getFullYear() - this._anoNascimento;
  }

  set idade(valor) {
    throw new Error('Não é possível definir idade diretamente');
  }
}

const pessoa = new Pessoa('João', 1990);
console.log(pessoa.nome); // JOÃO
console.log(pessoa.idade); // 34 (calculado)

pessoa.nome = 'Maria'; // Usa o setter
console.log(pessoa.nome); // MARIA
```

### Validação com Setters

```javascript
class Temperatura {
  #celsius;

  constructor(celsius) {
    this.celsius = celsius;
  }

  get celsius() {
    return this.#celsius;
  }

  set celsius(valor) {
    if (valor < -273.15) {
      throw new Error('Temperatura abaixo do zero absoluto');
    }
    this.#celsius = valor;
  }

  get fahrenheit() {
    return (this.#celsius * 9/5) + 32;
  }

  set fahrenheit(valor) {
    this.celsius = (valor - 32) * 5/9;
  }
}

const temp = new Temperatura(25);
console.log(temp.celsius); // 25
console.log(temp.fahrenheit); // 77
temp.fahrenheit = 86;
console.log(temp.celsius); // 30
```

---

## Métodos Estáticos

Pertencem à classe, não às instâncias.

```javascript
class Matematica {
  static PI = 3.14159;

  static somar(a, b) {
    return a + b;
  }

  static areaCirculo(raio) {
    return this.PI * raio ** 2;
  }
}

console.log(Matematica.somar(5, 3)); // 8
console.log(Matematica.areaCirculo(10)); // 314.159
console.log(Matematica.PI); // 3.14159

// const mat = new Matematica();
// mat.somar(1, 2); // Erro: não é método de instância
```

### Factory Pattern com Métodos Estáticos

```javascript
class Usuario {
  constructor(nome, email, tipo) {
    this.nome = nome;
    this.email = email;
    this.tipo = tipo;
  }

  static criarAdmin(nome, email) {
    return new Usuario(nome, email, 'admin');
  }

  static criarConvidado(nome) {
    return new Usuario(nome, `${nome}@temp.com`, 'convidado');
  }
}

const admin = Usuario.criarAdmin('Carlos', 'carlos@site.com');
const convidado = Usuario.criarConvidado('Visitante');
```

---

## Prototype

Todo objeto em JavaScript tem um prototype (protótipo).

```javascript
function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.cumprimentar = function() {
  return `Olá, ${this.nome}`;
};

const p1 = new Pessoa('Ana');
const p2 = new Pessoa('Bruno');

console.log(p1.cumprimentar()); // Olá, Ana
console.log(p2.cumprimentar()); // Olá, Bruno

// Ambos compartilham o mesmo método
console.log(p1.cumprimentar === p2.cumprimentar); // true
```

### Cadeia de Protótipos

```javascript
class Animal {
  respirar() {
    return 'Respirando...';
  }
}

class Mamifero extends Animal {
  amamentar() {
    return 'Amamentando...';
  }
}

class Cachorro extends Mamifero {
  latir() {
    return 'Au au!';
  }
}

const dog = new Cachorro();
console.log(dog.latir()); // Au au!
console.log(dog.amamentar()); // Amamentando...
console.log(dog.respirar()); // Respirando...

// Verificando a cadeia
console.log(dog instanceof Cachorro); // true
console.log(dog instanceof Mamifero); // true
console.log(dog instanceof Animal); // true
```

### Modificando Prototypes

```javascript
Array.prototype.primeiro = function() {
  return this[0];
};

Array.prototype.ultimo = function() {
  return this[this.length - 1];
};

const numeros = [1, 2, 3, 4, 5];
console.log(numeros.primeiro()); // 1
console.log(numeros.ultimo()); // 5
```

---

## Composição vs Herança

### Herança (é um)

```javascript
class Veiculo {
  mover() {
    return 'Movendo...';
  }
}

class Carro extends Veiculo {
  // Carro É UM Veículo
}
```

### Composição (tem um)

```javascript
class Motor {
  ligar() {
    return 'Motor ligado';
  }
}

class Rodas {
  girar() {
    return 'Rodas girando';
  }
}

class Carro {
  constructor() {
    this.motor = new Motor(); // Carro TEM UM Motor
    this.rodas = new Rodas(); // Carro TEM Rodas
  }

  dirigir() {
    return `${this.motor.ligar()} - ${this.rodas.girar()}`;
  }
}

const carro = new Carro();
console.log(carro.dirigir()); // Motor ligado - Rodas girando
```

### Mixins (Composição Avançada)

```javascript
const nadador = {
  nadar() {
    return `${this.nome} está nadando`;
  }
};

const voador = {
  voar() {
    return `${this.nome} está voando`;
  }
};

class Pato {
  constructor(nome) {
    this.nome = nome;
  }
}

Object.assign(Pato.prototype, nadador, voador);

const donald = new Pato('Donald');
console.log(donald.nadar()); // Donald está nadando
console.log(donald.voar()); // Donald está voando
```

---

## Padrões de Design OOP

### Singleton

```javascript
class Database {
  static #instance;

  constructor() {
    if (Database.#instance) {
      return Database.#instance;
    }
    this.connection = 'Connected';
    Database.#instance = this;
  }

  query(sql) {
    return `Executing: ${sql}`;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true (mesma instância)
```

### Factory

```javascript
class Carro {
  constructor(modelo) {
    this.tipo = 'Carro';
    this.modelo = modelo;
  }
}

class Moto {
  constructor(modelo) {
    this.tipo = 'Moto';
    this.modelo = modelo;
  }
}

class VeiculoFactory {
  static criar(tipo, modelo) {
    switch(tipo) {
      case 'carro':
        return new Carro(modelo);
      case 'moto':
        return new Moto(modelo);
      default:
        throw new Error('Tipo inválido');
    }
  }
}

const veiculo1 = VeiculoFactory.criar('carro', 'Civic');
const veiculo2 = VeiculoFactory.criar('moto', 'CB500');
```

### Observer

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(nome) {
    this.nome = nome;
  }

  update(data) {
    console.log(`${this.nome} recebeu: ${data}`);
  }
}

const subject = new Subject();
const obs1 = new Observer('Observer 1');
const obs2 = new Observer('Observer 2');

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify('Nova notificação!');
```

---

## Boas Práticas

1. **Use classes para estruturas complexas**
```javascript
// ✅ Bom
class Usuario {
  constructor(nome) {
    this.nome = nome;
  }
}

// ❌ Evite para objetos simples
const config = { tema: 'dark', idioma: 'pt' };
```

2. **Prefira composição sobre herança**
```javascript
// ✅ Melhor
class Carro {
  constructor() {
    this.motor = new Motor();
  }
}

// ❌ Herança profunda
class Veiculo extends Transporte extends Objeto {}
```

3. **Use propriedades privadas**
```javascript
class Conta {
  #saldo = 0; // ✅ Privado

  getSaldo() {
    return this.#saldo;
  }
}
```

4. **Métodos pequenos e focados**
```javascript
class Pedido {
  processar() {
    this.validar();
    this.calcular();
    this.salvar();
  }

  validar() { /* ... */ }
  calcular() { /* ... */ }
  salvar() { /* ... */ }
}
```

5. **Nomeação clara**
```javascript
// ✅ Bom
class GerenciadorDeUsuarios {}
class CalculadoraDeImpostos {}

// ❌ Evite
class Manager {}
class Helper {}
```

---

## Resumo dos 4 Pilares da OOP

| Pilar | Descrição | Exemplo |
|-------|-----------|---------|
| **Encapsulamento** | Ocultar dados internos | Propriedades privadas (#) |
| **Herança** | Reutilizar código | extends, super |
| **Polimorfismo** | Mesma interface, comportamentos diferentes | Override de métodos |
| **Abstração** | Simplificar complexidade | Métodos públicos simples |

---

## Recursos Adicionais

- [MDN - Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [MDN - Herança e Prototype](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [JavaScript.info - Classes](https://javascript.info/classes)
