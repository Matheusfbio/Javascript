// const Pessoa = [
//   { nome: "João", idade: 30, cidade: "São Paulo" },
//   { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
//   { nome: "Pedro", idade: 35, cidade: "Belo Horizonte" },
// ];

// const mapPessoas = Pessoa.map((Pessoas) => {
//   return Pessoas;
// });
// console.log(mapPessoas);

const usuario = [{ nome: "João", idade: 30, cidade: "São Paulo" }];

const percorrePessoa = usuario.map((usuario, index) => {
  return { ...usuario, index: index, pais: "BR" };
});

console.log(percorrePessoa);
