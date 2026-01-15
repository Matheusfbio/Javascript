
# 2620. Counter

**Difficulty:** Easy  
**Topic:** Closure (JavaScript)  
**Companies:** LeetCode  

---

## 📌 Descrição

Dado um inteiro `n`, retorne uma **função contador**.

Essa função deve:
- Retornar `n` na primeira chamada
- Retornar `n + 1` na segunda
- Continuar incrementando em `+1` a cada chamada subsequente  

Ou seja:  
`n, n + 1, n + 2, ...`

Esse é um exercício clássico de **closure**, onde uma função mantém estado entre chamadas.

---

## 🧪 Exemplo 1

**Input**
```js
n = 10
["call","call","call"]
````

**Output**

```js
[10, 11, 12]
```

**Explicação**

```js
counter() = 10 // Primeira chamada retorna n
counter() = 11 // Incrementa +1
counter() = 12 // Incrementa +1 novamente
```

---

## 🧪 Exemplo 2

**Input**

```js
n = -2
["call","call","call","call","call"]
```

**Output**

```js
[-2, -1, 0, 1, 2]
```

**Explicação**

O contador começa em `-2` e incrementa em cada chamada subsequente.

---

## 🔒 Restrições

* `-1000 <= n <= 1000`
* `0 <= calls.length <= 1000`
* `calls[i] === "call"`

---

## 🧠 Conceito-chave: Closure

Uma **closure** acontece quando uma função:

* É criada dentro de outra função
* Continua tendo acesso às variáveis do escopo externo, mesmo após esse escopo já ter sido executado

Nesse exercício:

* `n` fica “guardado” dentro da função retornada
* Cada chamada acessa e atualiza esse mesmo valor

É estado privado.
É encapsulamento.
É JavaScript no seu habitat natural.

---

## 🧩 Por que esse exercício importa?

Porque ele testa se você:

* Entende **escopo**
* Entende **estado**
* Entende que função em JS não é só ação — é **memória viva**

Closure não é truque.
É fundamento.
Quem domina isso, escala.

---

💡 **Resumo executivo:**
Esse problema não é sobre contar números.
É sobre entender como o JavaScript lembra das coisas quando ninguém está olhando.

---
