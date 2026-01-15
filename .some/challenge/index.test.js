const { productAvailable, productPrice } = require(".")

describe("Should verify if exist a product on the inventory", () => {
  test('Should return true if exist SOME products on the invetory ', () => {
    const products = [
      { nome: "Mouse", preco: 89.9, emEstoque: true },
      { nome: "Teclado", preco: 149.9, emEstoque: false },
      { nome: "Monitor", preco: 599.9, emEstoque: false },
    ];

    const invetory = productAvailable(products)
    expect(invetory).toBeTruthy()

  })
  test('Should return false if not exist products on the invetory ', () => {
    const products = [
      { nome: "Mouse", preco: 89.9, emEstoque: false },
      { nome: "Teclado", preco: 149.9, emEstoque: false },
      { nome: "Monitor", preco: 599.9, emEstoque: false },
    ];

    const invetory = productAvailable(products)
    expect(invetory).toBeFalsy()

  })
  test('Should return the products with low value on the invetory ', () => {
    const products = [
      { nome: "Mouse", preco: 89.9, emEstoque: false },
      { nome: "Teclado", preco: 149.9, emEstoque: false },
      { nome: "Monitor", preco: 599.9, emEstoque: false },
    ];

    const invetory = productPrice(products)
    expect(invetory).toEqual({
      Filtro_valor: [
        "Mouse custa 89.9",
        "Teclado custa 149.9",
      ],
    })

  })
})