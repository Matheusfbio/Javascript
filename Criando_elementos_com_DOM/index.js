//Criando um elemento no Html
const newParagraph = document.createElement("p");

const text = document.createTextNode("Produtos que estão com descontos");

newParagraph.appendChild(text);

const body = document.querySelector("body");

body.appendChild(newParagraph);
