import { v7 as uuidv7 } from "uuid";
type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
};

const listOfProducts: Product[] = [
  {
    id: uuidv7(),
    name: "Smartphone",
    price: 699.99,
    category: "tech",
  },
  {
    id: uuidv7(),
    name: "Laptop",
    price: 1299.99,
    category: "tech",
  },
  {
    id: uuidv7(),
    name: "Headphones",
    price: 199.99,
    category: "Audio",
  },
];

// console.log(listOfProducts);

export default function filterProductTech() {
  const filterProduct = listOfProducts.filter(
    (product) => product.category === "tech",
  );

  // console.log(filterProduct);

  const productWithDiscount = filterProduct.map((p) => {
    return {
      id: p.id,
      name: p.name,
      priceDiscount: Math.round(p.price * 0.9 * 100) / 100,
    };
  });

  return productWithDiscount;
}
// console.log(filterProductTech());
