// let initValue;
// let sum = 0;

// while (true) {
//   const num = Number(input);
//   // console.log(`${initValue}`);
//   // // break;
//   if (isNaN(num)) {
//     console.log(
//       `O numero ainda não foi digitado!, por favor tente novamente...`
//     );
//     continue;
//   } else if (initValue < 0) {
//     console.log("dale");
//     continue;
//   } else {
//     console.log((num += sum));
//   }
//   // console.log(num + sum);
//   continue;
// }

let soma = 0;
let input = prompt("Insira um numero: ");
let num = Number(input);

while (num >= 0) {
  soma += num;
  let input2 = prompt("Insira outro numero: ");
  num = Number(input2);
}

console.log(`A soma total dos números inseridos é: ${soma}`);
alert(`A soma total dos números inseridos é: ${soma}`);
