const products = [
  { nome: "Camisa", preco: 29.9 },
  { nome: "Calça", preco: 59.9 },
  { nome: "Tênis", preco: 89.9 },
];

const productNameUpperCase = products.map((product) => {
  console.log(product.nome.toUpperCase())
})

console.log("-----------------------------------")

const showProducts = products.forEach((product) => {
  console.log(product.nome, "-", new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.preco.toFixed(2)))
})

const showAboutProduct = products.map((product) => {
  console.log("O produto " + product.nome + " custa " + new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.preco.toFixed(2)))
});

