let num1 = 0.8;
let num2 = 0.1;
// Mas a melhor forma é essa aqui
// num1 += num2; // num1 = num1 = num2
// num1 += num2; // num1 = num1 = num2

// Essa daqui deixa o codigo mais complexo
num1 = (num1 * 100 + num2 * 100) / 100; // => 0.9
num1 = (num1 * 100 + num2 * 100) / 100; // => 1

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));
//O num1 só muda para String apenas uma vez.
// console.log(num1.toString() + num2);

//já aqui o num1 se torna uma String definitivamente
// num1 = num1.toString();
// console.log(typeof num1);

//Também pode ver a representação binario

// console.log(num1.toString(2));

//Temos também o toFixed para arendodar numeros float tipo => 23.35
//É so definir o numero e definir quantas casa decimais vc quer mostrar

// console.log(num1.toFixed(2));

//Temos também de como verificar se um numero é inteiro

// console.log(Number.isInteger(num1));

//Existe outra forma também que é

//criando uma nova variavel e passando para dentro dele um int e uma string
// let temp = num1 * "hello";

// let temp = num1 * "5";

//Sendo assim returnando um NaN
// console.log(temp);

//Já aqui a gente está perguntando se o let temp é um NaN
// console.log(Number.isNaN(temp));

//Agora se a gente trocar no lugar do "hello" por "5" vai trocar para false

// console.log(Number.isNaN(temp));
