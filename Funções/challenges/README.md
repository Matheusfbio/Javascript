Claro! Aqui estão dois desafios sobre **funções geradoras** em JavaScript/TypeScript:

---

### **Desafio 1: Contador Personalizado**

Crie uma **função geradora** chamada `contador` que receba dois parâmetros:

- `inicio`: o número inicial da contagem.
- `passo`: o valor a ser incrementado a cada chamada de `.next()`.

O gerador deve retornar os valores da sequência infinita baseada nesses parâmetros.

📌 **Exemplo de uso esperado:**

```typescript
const gen = contador(5, 2);

console.log(gen.next().value); // 5
console.log(gen.next().value); // 7
console.log(gen.next().value); // 9
console.log(gen.next().value); // 11
```

---

### **Desafio 2: Fibonacci com Geradores**

Implemente uma **função geradora** chamada `fibonacci` que gere a sequência de Fibonacci. A sequência começa com `0` e `1`, e cada número seguinte é a soma dos dois anteriores.

📌 **Exemplo de uso esperado:**

```typescript
const gen = fibonacci();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
```

---

🔹 **Dica:** Utilize a palavra-chave `yield` dentro da função geradora para pausar e retomar a execução.

Se precisar de ajuda com a solução, me avise! 🚀
