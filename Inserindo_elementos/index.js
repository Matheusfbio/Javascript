//Criando o elemento
const newDiv = document.createElement("div");
//adiciona na nova div um Class para ela
newDiv.classList = "div-criada";
console.log(newDiv);

//Inserindo um elemento filho
const container = document.querySelector("#container");

container.appendChild(newDiv);

//insertBefore - insere antes

const newDiv2 = document.createElement("div");

newDiv2.classList = "div-before";

const showDivs = document.querySelector("#container .div-criada");

console.log(showDivs);

container.insertBefore(newDiv2, showDivs);
