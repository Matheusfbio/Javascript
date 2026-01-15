const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 6 },
  { nome: "Clara", nota: 9 },
  { nome: "Daniel", nota: 7 },
  { nome: "Elisa", nota: 5 }
];


const AlunosAprovados = alunos.every(aprovados => aprovados.nota >= 7)

const AlunosReprovados = alunos.filter(reprovados => reprovados.nota < 7).map(reprovados => reprovados.nome)

if (AlunosAprovados) {
  console.log("Todos os alunos estão aprovados")
}
else {
  console.log("Os alunos reprovados são: " + AlunosReprovados)
  console.log("A quantidade de alunos reprovados é: " + AlunosReprovados.length)
} 