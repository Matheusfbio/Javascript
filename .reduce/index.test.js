const { carrinho, total } = require('./index.js');

describe('reduce test', () => {
  it('should calculate the total price of items in the cart', () => {
    expect(carrinho).toEqual([
      { nome: "Maçã", quantidade: 3, preco: 2.5 },
      { nome: "Banana", quantidade: 2, preco: 1.5 },
      { nome: "Morango", quantidade: 1, preco: 5.0 },
    ]);
  })

  it('should return the total price of the cart', () => {
    expect(total).toBe(15.5);
  });
  it('should return a number as total price', () => {
    expect(typeof total).toBe('number');
  });
});