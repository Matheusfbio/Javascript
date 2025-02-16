### Desafio 1: Simulando uma API com Promises

Crie uma função que simule a chamada a uma API fictícia para buscar dados de um usuário. A função deve:

1. Retornar uma `Promise`.
2. Resolver a Promise com os dados do usuário após 2 segundos.
3. Rejeitar a Promise se o ID do usuário não for fornecido.

**Requisitos:**

- Use o método `setTimeout` para simular o tempo de resposta.
- Trate os casos de sucesso e erro utilizando `.then()` e `.catch()`.

**Exemplo de uso:**

```javascript
fetchUserData(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error));

fetchUserData() // Sem ID
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
```

---

### Desafio 2: Corrida de Promises (Promise.race)

Implemente duas funções que retornem Promises:

1. `taskA`: resolve após um tempo aleatório (entre 1 e 3 segundos).
2. `taskB`: resolve após um tempo aleatório (entre 2 e 4 segundos).

Crie um código que utilize `Promise.race` para executar as duas funções e exiba no console qual tarefa terminou primeiro.

**Requisitos:**

- Use `Math.random()` para gerar os tempos aleatórios.
- Garanta que o resultado seja dinâmico, ou seja, a tarefa vencedora pode mudar a cada execução.

**Exemplo de uso:**

```javascript
Promise.race([taskA(), taskB()])
  .then((result) => console.log(`Vencedor: ${result}`))
  .catch((error) => console.error(error));
```
