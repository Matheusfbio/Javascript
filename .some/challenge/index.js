const products = [
  { nome: "Mouse", preco: 89.9, emEstoque: true },
  { nome: "Teclado", preco: 149.9, emEstoque: false },
  { nome: "Monitor", preco: 599.9, emEstoque: false },
];

function productAvailable(products) {
  const verifyProductAvailable = products.some((verifyAvailable) => verifyAvailable.emEstoque)
  return verifyProductAvailable
};

function productPrice(products) {
  const verifyPrice = products.filter(money => money.preco <= 150).map(money => `${money.nome} custa ${money.preco}`)
  return { Filtro_valor: verifyPrice }
}

console.log(productPrice(products));
// console.log(productAvailable(products));

module.exports = { productAvailable, productPrice }