// const allClients = ["John", "bruno", "marcelo", "luiz", "matheus"];

// allClients.sort((a, b) =>
//   a.localeCompare(b, undefined, { sensitivity: "base" })
// );
// for clasico
// for (let i = 0; i < allClients.length; i++) {
//   console.log(allClients[i]);
// }
const pessoa = {
  name: "Matheus",
  lastname: "Fabio",
  age: 30,
};
// for in "use em objetos"
for (let property in pessoa) {
  console.log(property, pessoa[property]);
}
// use so para array
// for (const property of pessoa) {
//   console.log(pessoa.age);
// }
