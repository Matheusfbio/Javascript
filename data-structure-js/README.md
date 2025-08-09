Claro, Matheus! Vamos iniciar um **curso prático de estrutura de dados em JavaScript puro**, **voltado para entrevistas técnicas no exterior**, com foco em clareza e prática.

---

## 📚 Módulo 1: Arrays e Strings (Fundamentos Essenciais)

### 1️⃣ Conceitos Teóricos

#### ✅ **Array**

* Estrutura linear que armazena dados em **índices numéricos**.
* Permite **inserir, deletar, acessar e modificar** elementos.
* Implementado como objeto com propriedades indexadas.

**Principais métodos úteis:**

```js
arr.push(1);    // adiciona no final
arr.pop();      // remove do final
arr.unshift(1); // adiciona no começo
arr.shift();    // remove do começo
arr.splice(i, 1); // remove ou insere elementos em qualquer índice
```

#### ✅ **String**

* Cadeia imutável de caracteres.
* Pode ser iterada como array.

**Métodos úteis:**

```js
str.split('');   // transforma em array de caracteres
str.join('');    // junta array de caracteres em string
str.includes('a'); // verifica se contém
```

#### 🧠 Conceitos para entrevista:

* Arrays são ótimos para **buscar por índice (O(1))**, mas **inserções/deleções no meio são lentas (O(n))**.
* Strings são **imutáveis** — qualquer modificação gera uma nova string.

---

### 2️⃣ Exercício Estilo LeetCode

> 🧪 **Problema: Verificar Palíndromo**

📌 Dado uma string `s`, retorne `true` se `s` for um palíndromo, ou `false` caso contrário. Ignore espaços e pontuação.

**Exemplo:**

```js
Input: "A man, a plan, a canal: Panama"
Output: true

Input: "race a car"
Output: false
```

---

### 💻 Implementação (comece você mesmo)

Tente resolver com base no que aprendeu:

```js
function isPalindrome(s) {
  // TODO: Limpar a string (remover não letras e espaços)
  // TODO: Transformar tudo em lowercase
  // TODO: Comparar a string com sua reversa
}
```

---

### ✅ Dica (Passos para pensar):

1. Use `.toLowerCase()` para normalizar.
2. Use regex `s.replace(/[^a-z0-9]/gi, '')` para limpar.
3. Compare com a versão invertida: `str.split('').reverse().join('')`.

---

### 🧠 Dica de entrevista:

> O entrevistador quer ver sua **capacidade de pensar passo a passo**, **boas práticas (nomes claros, funções puras)**, e talvez **uma solução otimizada sem usar `.reverse()`** como bônus.

---

## Próximo módulo:

Se quiser, no **Módulo 2** vamos para **Stacks & Queues (Pilhas e Filas)** com implementação manual, que **sempre caem em entrevistas**.

---

Quer que corrija sua solução ou siga para o próximo módulo?
