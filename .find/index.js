const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const el_array = [
  "JavaScript Básico ",
  " Python para Iniciantes",
  " Desenvolvimento Web com HTML e CSS",
  " React do Zero ao Avançado",
  " Node.js e Express",
  " Banco de Dados com MySQL",
  " Java Fundamentos",
  " C# para Iniciantes",
  " TypeScript Essencial",
  " Git e GitHub na Prática"
]
p_array.innerHTML = "[" + el_array + "]"

btnPesquisar.addEventListener("click", () => {
  resultado.innerHTML = "Valor não encontrado"
  const result = el_array.find((el) => {
    if (el == txt_pesquisar.value) {
      resultado.innerHTML = "Valor encontrado: " + el
      return e
    }
  })
  console.log(result)
})