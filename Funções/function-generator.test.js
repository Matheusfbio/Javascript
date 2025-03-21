const { gen, fibonacci } = require(".");

describe("Challange about genarator function", () => {
  test("Should generate a sequence starting from 5 with step 2", () => {
    const generator = gen(5, 2);

    expect(generator.next().value).toBe(5);
    expect(generator.next().value).toBe(7);
    expect(generator.next().value).toBe(9);
    expect(generator.next().value).toBe(11);
  });

  test("Should generate a sequence starting from fibonacci", () => {
    const fib = fibonacci(0, 1);
    expect(fib.next().value).toBe(0);
    expect(fib.next().value).toBe(1);
    expect(fib.next().value).toBe(1);
    expect(fib.next().value).toBe(2);
  });
});
