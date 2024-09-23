console.log("Antes do SetTimeout");

setTimeout(() => {
  console.log("Testando o setTimeout");
}, 3000);

console.log("Depois do SetTimeout");

setInterval(() => {
  console.log("Testando setInterval");
}, 4000);
