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

let menu;
// let opcao;
do {
  menu = Number(prompt("o que voce gostaria de calcular: "));
  switch (menu) {
    case 1:
      alert("Adição");
      break;
    case 2:
      alert("Subtração");
      break;
    case 3:
      alert("Multiplicação");
      break;
    case 4:
      alert("Divisão");
      break;
    case 5:
      alert("Sair");
      break;
  }
} while (menu !== 5);
