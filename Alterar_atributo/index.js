//Adicionando atributo

const title = document.querySelector("#title");

title.setAttribute("class", "h2-titles");

console.log(title);

// const btn = document.querySelector("#btn");

// btn.setAttribute("disabled", "btn");

//Removando atributo

const list = document.querySelector("#listas-produtos");

list.removeAttribute("id");

console.log(list);
