const products = [
  { nome: "Camisa", preco: 29.9 },
  { nome: "Calça", preco: 59.9 },
  { nome: "Tênis", preco: 89.9 },
];

const productNameUpperCase = products.map((product) => {
  console.log(product.nome.toUpperCase())
})

console.log("-----------------------------------")

products.forEach((product) => {
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.preco);
  console.log(`${product.nome} - ${precoFormatado}`);
});

console.log("--------------------------------------")
const showAboutProduct = products.map((product) => {
  const formatPrice = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(product.preco)
  return `O produto ${product.name} custa ${formatPrice}`
});

console.log(showAboutProduct)
