### Desafio 1: Iteração Assíncrona com `for...of` e `async/await`

Você tem uma lista de URLs e precisa buscar dados de cada URL usando a função `fetch`. O objetivo é iterar sobre a lista com `for...of` e usar `async/await` para aguardar as respostas das requisições.

#### Código inicial fornecido:

```javascript
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];
```

#### Objetivo:

1. Use `for...of` para iterar pelas URLs.
2. Realize uma requisição `fetch` para cada URL e aguarde a resposta usando `async/await`.
3. Exiba no console o título de cada post no formato: `"Título: [titulo]"`.

#### Solução esperada:

```javascript
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

async function fetchPosts() {
  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Título: ${data.title}`);
  }
}

fetchPosts();
```

### Desafio 2: Consumindo uma API com `for...of` e `async/await`

Você tem uma lista de IDs de usuários e precisa buscar os dados de cada usuário a partir de uma API. Use `for...of` para iterar sobre os IDs e `async/await` para realizar as requisições.

#### Código inicial fornecido:

```javascript
const userIds = [1, 2, 3];
```

#### Objetivo:

1. Itere pelos IDs com `for...of`.
2. Realize uma requisição `fetch` para a URL base `https://jsonplaceholder.typicode.com/users/` concatenada com o ID do usuário.
3. Exiba no console o nome e o e-mail de cada usuário no formato: `"Nome: [nome], E-mail: [email]"`.

---

### Desafio 3: Operações Assíncronas em Propriedades de Objetos com `for...in` e `async/await`

Você tem um objeto onde as propriedades são tarefas, e cada valor é o tempo estimado (em milissegundos) que leva para completar a tarefa. Simule a execução de cada tarefa usando `async/await` com `for...in`.

#### Código inicial fornecido:

```javascript
const tarefas = {
  prepararCafe: 1500,
  limparMesa: 1000,
  estudarJavaScript: 2000,
};
```

#### Objetivo:

1. Use `for...in` para iterar pelas propriedades do objeto.
2. Simule o tempo de execução da tarefa usando `setTimeout` dentro de uma função assíncrona.
3. Exiba no console mensagens indicando o início e a conclusão de cada tarefa no formato:
   - `"Iniciando [tarefa]..."` antes de iniciar.
   - `"Concluído: [tarefa]."` após o tempo correspondente ser aguardado.
