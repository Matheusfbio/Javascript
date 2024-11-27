### Desafio 1: Explorando Arrays com `for...of`

Você recebeu uma lista de números que representam o estoque de produtos em uma loja. Crie um código que use `for...of` para iterar sobre o array e exiba os números que são pares. Além disso, se o número for maior que 100, imprima uma mensagem especial indicando que o estoque está alto.

**Array fornecido:**

```javascript
const estoques = [45, 200, 72, 150, 89, 34, 110, 99];
```

**Objetivo:**

1. Itere sobre o array usando `for...of`.
2. Exiba no console apenas os números pares.
3. Adicione uma mensagem para números maiores que 100, como: `"Estoque alto: 150"`.

---

### Desafio 2: Explorando Objetos com `for...in`

Você tem um objeto que representa os dados de uma pessoa. Escreva um código que usa `for...in` para exibir todas as propriedades e valores desse objeto. Além disso, exiba uma mensagem personalizada se a propriedade for "idade".

**Objeto fornecido:**

```javascript
const pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Desenvolvedor",
  cidade: "São Paulo",
};
```

**Objetivo:**

1. Use `for...in` para iterar pelas propriedades do objeto.
2. Exiba no console as propriedades e seus respectivos valores no formato: `"Propriedade: valor"`.
3. Adicione uma mensagem especial, como: `"João é jovem!"`, quando a propriedade iterada for "idade".
