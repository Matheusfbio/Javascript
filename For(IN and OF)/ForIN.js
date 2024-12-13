const pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Desenvolvedor",
  cidade: "São Paulo",
};

for (const key in pessoa) {
  if (key === "idade") {
    console.log(`${pessoa.nome} é jovem`);
  } else {
    console.log(`${key} : ${pessoa[key]}`);
  }
}
