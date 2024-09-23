//- 💻  `var` permite que variáveis sejam acessíveis em qualquer parte do código, mesmo fora do seu escopo original.
//- 🔐 `let` garante que as variáveis sejam acessíveis apenas dentro do seu escopo original.
//- 🔒 `const` cria constantes, que não podem ter seus valores alterados após a declaração.
//- 🔄 `let` e `const`  são as melhores opções para declarar variáveis ​​em Javascript moderno.
//- 🧠  O uso de `let` e `const`  contribui para um código mais organizado e seguro.

// function ShowName() {
//   if (true) {
//     //- 💻  `var` permite que variáveis sejam acessíveis em qualquer parte do código, mesmo fora do seu escopo original.
//     let name = "Matheus";
//     console.log("Dentro do if da função " + name);
//   }
//   //O name não pode ser chamado aqui, porque o 🔐 `let` garante que as variáveis sejam acessíveis apenas dentro do seu escopo original.
//   console.log("Dentro da função " + name);
// }

// ShowName();
// // o name esta dando erro aqui, porque esta usando o var, o que não é para acontecer usando let ou var
// console.log("Fora da função ShowName " + name);

//- 🔒 `const` cria constantes, que não podem ter seus valores alterados após a declaração.
const name = "Matheus";
// aqui a constant name não poder ter o seu valor reatribuido.
name = "Fabio";

console.log(name);
