Aqui estão dois desafios para você praticar o método `.map()` em JavaScript:

### Desafio 1: Transformando Idades

Você tem um array de objetos representando pessoas, e cada objeto contém o nome e a idade de uma pessoa. Sua tarefa é criar um novo array que contenha o nome da pessoa seguido pela sua idade em anos, mas com um aumento de 5 anos para todas as idades.

**Entrada:**

```js
const pessoas = [
  { nome: "Lucas", idade: 25 },
  { nome: "Mariana", idade: 30 },
  { nome: "José", idade: 40 },
];
```

**Saída esperada:**

```js
["Lucas tem 30 anos", "Mariana tem 35 anos", "José tem 45 anos"];
```

**Dica:** Use `.map()` para iterar sobre o array e transformar os dados.

---

### Desafio 2: Extraindo e Transformando Números

Você tem um array de números e precisa criar um novo array onde cada número é elevado ao quadrado e multiplicado por 2. Você deve usar `.map()` para realizar a transformação.

**Entrada:**

```js
const numeros = [2, 4, 6, 8, 10];
```

**Saída esperada:**

```js
[8, 32, 72, 128, 200];
```

**Dica:** Use `.map()` para iterar sobre o array e aplicar as transformações matemáticas a cada elemento.
