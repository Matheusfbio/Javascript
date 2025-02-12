const gen = require(".");

test("Should generate a sequence starting from 5 with step 2", () => {
  const generator = gen(5, 2);

  expect(generator.next().value).toBe(5);
  expect(generator.next().value).toBe(7);
  expect(generator.next().value).toBe(9);
  expect(generator.next().value).toBe(11);
});
