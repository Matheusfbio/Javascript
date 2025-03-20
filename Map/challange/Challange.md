Claro! Aqui estão dois desafios sobre `Map` em JavaScript:

### 🔹 **Desafio 1: Contagem de Palavras**

Crie uma função que receba uma string e retorne um `Map` contendo a contagem de cada palavra na string. Ignore maiúsculas e minúsculas, e remova pontuações.

**Exemplo:**

```js
const texto = "O rato roeu a roupa do rei de Roma. O rei ficou bravo.";
console.log(contarPalavras(texto));
```

**Saída esperada:**

```js
Map(7) {
  'o' => 2,
  'rato' => 1,
  'roeu' => 1,
  'a' => 1,
  'roupa' => 1,
  'do' => 1,
  'rei' => 2,
  'de' => 1,
  'roma' => 1,
  'ficou' => 1,
  'bravo' => 1
}
```

---

### 🔹 **Desafio 2: Frequência de Elementos em um Array**

Implemente uma função que recebe um array de números e retorna um `Map`, onde a chave é o número e o valor é a quantidade de vezes que ele aparece no array.

**Exemplo:**

```js
const numeros = [1, 2, 3, 2, 4, 1, 5, 1, 2];
console.log(contarFrequencia(numeros));
```

**Saída esperada:**

```js
Map(5) {
  1 => 3,
  2 => 3,
  3 => 1,
  4 => 1,
  5 => 1
}
```

Esses desafios ajudam a praticar o uso de `Map` para armazenar contagens de elementos. Se precisar de dicas ou quiser um nível mais avançado, me avise! 🚀
