// #### **Desafio 1: Soma dos Números Positivos** ✅✅✅

// Peça ao usuário para inserir números inteiros positivos repetidamente.
// Use um loop `while` para somar os números fornecidos.
// O loop deve terminar assim que o usuário inserir um número negativo.
// No final, exiba a soma total dos números inseridos.

// let soma = 0;
// let input = prompt("Insira um numero: ");
// let num = Number(input);

// while (num >= 0) {
//   soma += num;
//   let input2 = prompt("Insira outro numero: ");
//   num = Number(input2);
// }

function calcularSoma(numeros) {
  let soma = 0;

  for (let num of numeros) {
    if (num < 0) break;
    soma += num;
  }

  return soma;
}

// console.log(`A soma total dos números inseridos é: ${soma}`);
// alert(`A soma total dos números inseridos é: ${soma}`);

// #### **Desafio 2: Multiplicação de Fatores** ✅✅✅

// ## Escreva um programa que peça ao usuário para inserir um número inteiro positivo e use um loop `while`
// para calcular o fatorial desse número. Mostre o resultado ao final.

// let input = prompt("insira um numero");
// let num = Number(input);
// let result = 1;

// while (num > 1) {
//   result *= num;
//   num--;
// }
// alert(result);
// console.log(result);

// ----------------------------------------------------------------

// ### **Desafios com `do-while`**

// #### **Desafio 3: Validação de Entrada**

// Peça ao usuário para inserir uma senha (uma string). Use um loop `do-while` para verificar se a senha está correta. O programa deve continuar pedindo até que o usuário insira a senha correta. Após acertar, mostre uma mensagem de sucesso.

// let ValidatePassword = "12345";
// let password;

// do {
//   password = String(prompt("insira sua senha"));
// } while (password !== ValidatePassword);
// alert("Senha confimar com sucesso ✅✅✅");

// #### **Desafio 4: Calculadora Simples**

// Implemente um programa que exiba um menu com as operações básicas (adição, subtração, multiplicação, divisão) e peça ao usuário para escolher uma operação. O programa deve executar a operação escolhida com dois números fornecidos pelo usuário. Use um loop `do-while` para continuar exibindo o menu até que o usuário escolha sair.

// let menu;
// // let opcao;
// do {
//   menu = Number(prompt("o que voce gostaria de calcular: "));
//   switch (menu) {
//     case 1:
//       alert("Adição");
//       break;
//     case 2:
//       alert("Subtração");
//       break;
//     case 3:
//       alert("Multiplicação");
//       break;
//     case 4:
//       alert("Divisão");
//       break;
//     case 5:
//       alert("Sair");
//       break;
//   }
// } while (menu !== 5);

module.exports = { calcularSoma };
