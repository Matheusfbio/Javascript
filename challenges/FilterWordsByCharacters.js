// ### Desafio 2: Filtro de Palavras com Determinado Caractere
// **Descrição:**
// Implemente uma função anônima que receba uma lista de palavras e um caractere. A função deve retornar apenas as palavras que começam com o caractere especificado, ignorando maiúsculas e minúsculas. A função deve ser atribuída a uma variável e invocada diretamente.
// **Exemplo:**
// Se a lista de palavras for `['Maçã', 'Banana', 'Melancia', 'morango', 'abacaxi']` e o caractere fornecido for `'m'`, a função deve retornar `['Maçã', 'Melancia', 'morango']`.

// Teste sua lógica com diferentes inputs e garanta que as funções sejam compactas e eficientes! 🚀 -->

const mockWords = ["Maçã", "Banana", "Melancia", "morango", "abacaxi"];

console.log(mockWords);

const FilterWordsByCharacters = (query) => {
  return mockWords.filter(function (words) {
    return words.toLowerCase().startsWith(query.toLowerCase());
  });
};

console.log(FilterWordsByCharacters("m"));
