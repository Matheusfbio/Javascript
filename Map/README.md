# Aprendizado sobre Map em JavaScript

Este arquivo demonstra o uso básico da estrutura de dados **Map** em JavaScript.

## O que é um Map?

O `Map` é uma coleção de pares chave-valor onde as chaves podem ser de qualquer tipo (diferente dos objetos que só aceitam strings/símbolos como chaves).

## Exemplo Prático

```javascript
const users = new Map();

// Adicionando dados com set()
users.set("alice", { name: "Alice", age: 25, city: "New York" });
users.set("bob", { name: "Bob", age: 30, city: "San Francisco" });
users.set("charlie", { name: "charlie", age: 35, city: "Los Angeles" });
```

## Métodos Principais Demonstrados

### `set(key, value)`
Adiciona ou atualiza um par chave-valor no Map.

### `get(key)`
Recupera o valor associado à chave especificada.

### `has(key)`
Verifica se uma chave existe no Map, retornando `true` ou `false`.

## Função de Busca

```javascript
function getUserInfo(username) {
  if (users.has(username)) {
    return users.get(username);
  } else {
    return "User not found";
  }
}
```

Esta função demonstra:
- Verificação de existência com `has()`
- Recuperação segura de dados com `get()`
- Tratamento de casos onde a chave não existe

## Vantagens do Map

✅ **Chaves flexíveis**: Aceita qualquer tipo como chave  
✅ **Ordem preservada**: Mantém a ordem de inserção  
✅ **Tamanho direto**: Propriedade `size` para contar elementos  
✅ **Iteração fácil**: Métodos nativos para percorrer os dados  
✅ **Performance**: Otimizado para adição/remoção frequente

## Quando Usar Map vs Object

**Use Map quando:**
- Precisar de chaves que não sejam strings
- A ordem de inserção for importante
- Adicionar/remover chaves frequentemente
- Precisar do tamanho exato da coleção

**Use Object quando:**
- Trabalhar com registros/estruturas fixas
- Precisar de sintaxe literal `{}`
- Usar métodos/propriedades específicas