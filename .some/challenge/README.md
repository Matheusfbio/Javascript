Claro! Aqui vai **1 desafio prático sobre `Array.prototype.some()` no JavaScript**, ideal para treinar a lógica e o uso do método:

---

### 🚀 **Desafio: Verificando Estoque de Produtos**

Você recebeu um array de objetos que representa os produtos de uma loja. Cada produto possui as propriedades: `nome`, `preco` e `emEstoque`.

**Objetivo:** Usar o método `.some()` para verificar se **existe ao menos um produto disponível em estoque**.

---

#### 🧾 **Exemplo de entrada:**

```js
const produtos = [
  { nome: "Mouse", preco: 89.9, emEstoque: false },
  { nome: "Teclado", preco: 149.9, emEstoque: false },
  { nome: "Monitor", preco: 599.9, emEstoque: true },
];
```

#### ✅ **Tarefa:**

Crie uma função chamada `temProdutoDisponivel` que recebe um array de produtos e retorna `true` se **pelo menos um** estiver com `emEstoque: true`. Caso contrário, retorna `false`.

---

#### 💡 **Dica:**

Use o método `.some()` para resolver o problema com apenas **uma linha de código dentro da função**.

---

#### ✅ **Saída esperada com o exemplo acima:**

```js
console.log(temProdutoDisponivel(produtos)); // true
```

Se todos os produtos estiverem com `emEstoque: false`, a função deve retornar `false`.

---

Se quiser, posso corrigir ou testar sua solução. Deseja isso?
