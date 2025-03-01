// Desafio 1
const pessoas = [
  { nome: "Lucas", idade: 25 },
  { nome: "Mariana", idade: 30 },
  { nome: "José", idade: 40 },
];

const dadosPessoais = pessoas.map((dadosPessoa) => {
  return `"${dadosPessoa.nome} tem ${dadosPessoa.idade + 5}"`;
});

console.log(dadosPessoais);

// Desafio 2

const numeros = [2, 4, 6, 8, 10];

const transformandoNumeros = numeros.map((numerosSquare) => {
  return numerosSquare ** 2 * 2;
});

console.log(transformandoNumeros);
