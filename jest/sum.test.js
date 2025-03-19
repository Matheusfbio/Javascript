const sum = require("./index.js");

test("Must be sum 2 number", () => {
  expect(sum(2, 3)).toBe(5);
});
