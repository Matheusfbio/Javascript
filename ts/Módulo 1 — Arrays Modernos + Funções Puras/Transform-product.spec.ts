import filterProductTech from "./Transform-products";

describe("Testing the filterProductTech fuction", () => {
  test("Should be return a 2 products with discount", () => {
    const result = filterProductTech();
    expect(result).toEqual([
      {
        id: expect.any(String),
        name: "Smartphone",
        priceDiscount: 629.99,
      },
      {
        id: expect.any(String),
        name: "Laptop",
        priceDiscount: 1169.99,
      },
    ]);
  });

  test("Should return only tech products with 10% discount applied", () => {
    const result = filterProductTech();
    result.forEach((product) => {
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("name");
      expect(product).toHaveProperty("priceDiscount");
      expect(product.priceDiscount).toBeLessThan(1299.99);
    });
  });
});
