const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const el_array = [
  32, 32, 44, 23, 37, 34, 44, 23, 31, 32, 44, 23,
]
p_array.innerHTML = "[" + el_array + "]"

btnVerificar.addEventListener("click", () => {
  const result = el_array.every((el) => {
    if (el < 20) {
      resultado.innerHTML = "Valor não encontrado"
      return el >= 20
    }
  })
  if (result) {
    resultado.innerHTML = "OK"
  }
  console.log(result)
})


// module.exports = {}