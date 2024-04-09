/* 
=> Rules 
=> if é a condição. 
=> 'else if' é a mesma coisa do 'If' mas só é executado quando vc quer checar mais de uma condição.
=> Else é executado caso a condição do if seja falso e você queira retornar algo.
=> If é usado sozinho
=> Sempre que utilizado a palavra else, precisa de um if antes
=> Eu posso ter varios else ifs na checagem
=> So posso ter um else na checagem
=> Podemos usar condições sem else if, utilizando apenas e else
*/

// const hora = 18;

// if (hora >= 0 && hora <= 11) {
//   console.log("Bom dia");
// } else if (hora >= 12 && hora <= 17) {
//   console.log("Boa tarde");
// } else if (hora >= 18 && hora <= 23) {
//   console.log("Boa noite");
// } else {
//   console.log("ola");
// }

const users = [
  {
    name: "Matheus Fabio",
    address: "Rua jaboatão dos guararabes",
    age: 25,
  },
  {
    name: "Lucyellici gomes",
    address: "Rua jardin veneza",
    age: 29,
  },
  {
    name: "Lucenilda da conceição",
    address: "Rua São josé",
    age: 40,
  },
];

// console.log(users);

// users.forEach((el, ind) => {
//   console.log(`Tipo de dados é ${ind}: ${typeof el}`);
// });
// const age = 20;

// operador ternario.
// const descUsers =
//   age >= 50
//     ? "Parabéns, vc ganhou 50% de desconto"
//     : "Parabéns, vc ganhou 25% de desconto";

// console.log(descUsers);
// console.log(users[2].age);

if (users[0].age >= 20 && users[0].age <= 30) {
  console.log(
    "Parabéns" + " " + users[0].name + " " + "vc ganhou um desconto de 30%"
  );
} else {
  console.log("Infelizmente vc nao tem desconto");
}
