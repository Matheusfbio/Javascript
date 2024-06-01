// Criando um elemento

const el = document.createElement("h1");

el.classList = "h1-title";

const text = document.createTextNode("Zé da macaxeira");

el.appendChild(text);

console.log(el);

// Seleciona o elemento a ser trocado

const title = document.querySelector("#title");

console.log(title);

const handleEl = title.parentNode;

handleEl.replaceChild(el, title);
