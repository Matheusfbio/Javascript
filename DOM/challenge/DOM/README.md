# Desafio de Manipulação do DOM: Lista de Países

Este é um pequeno projeto que demonstra a manipulação dinâmica de elementos do DOM (Document Object Model) usando JavaScript puro. O script cria uma lista de países e permite que cada item da lista seja removido individualmente.

## ✨ Funcionalidades

-   Renderiza uma lista de países a partir de um array.
-   Cria dinamicamente elementos HTML para cada país.
-   Adiciona um botão de exclusão para cada item da lista.
-   Remove o item correspondente da lista quando o botão de exclusão é clicado.

## ⚙️ Como Funciona

O script `index.js` executa as seguintes ações:

1.  **Seleção do Container**: Encontra o elemento no HTML com o `id="countries"`, que servirá como o container para a lista.
2.  **Array de Dados**: Um array de strings chamado `countries` contém os nomes dos países a serem exibidos.
3.  **Criação Dinâmica**: O script itera sobre o array `countries`. Para cada nome de país:
    -   Cria um novo elemento `<div>` para representar o item da lista.
    -   Dentro do `<div>`, cria um `<span>` para exibir o nome do país.
    -   Cria um elemento `<img>` que funciona como um botão para deletar o item.
4.  **Adição de Evento**: Um evento de clique (`click`) é adicionado a cada botão de exclusão. Quando acionado, ele remove o `<div>` pai (o item da lista) do DOM.
5.  **Renderização**: Cada `<div>` criado é adicionado como filho do elemento container `#countries`.

## 🚀 Pré-requisitos

Para que este script funcione corretamente, sua estrutura HTML (`index.html`) deve conter:

1.  Um elemento que servirá como container para a lista. Este elemento deve ter o `id="countries"`.
    ```html
    <div id="countries"></div>
    ```
2.  Uma imagem para o botão de exclusão no mesmo diretório do `index.html` ou o caminho (`src`) no script deve ser ajustado. O script espera encontrar `delete.png`.
    ```html
    <!-- Exemplo de estrutura de arquivos -->
    /
    ├── index.html
    ├── index.js
    └── delete.png
    ```
3.  A inclusão do script `index.js` no seu arquivo HTML.
    ```html
    <script src="./index.js"></script>
    ```