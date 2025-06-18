const carrinho = [
  { nome: "Maçã", quantidade: 3, preco: 2.5 },
  { nome: "Banana", quantidade: 2, preco: 1.5 },
  { nome: "Morango", quantidade: 1, preco: 5.0 },
];

console.table(carrinho);

const total = carrinho.reduce((acc, item) => {
  return acc + item.quantidade * item.preco;
}, 0);

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

module.exports = { carrinho, total };