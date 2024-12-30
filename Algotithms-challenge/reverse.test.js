const reverse = require("./index.js");

describe("Reverse Function", () => {
  test("Reverse function exists", () => {
    expect(reverse).toBeDefined();
  });
  test("....", () => {
    expect(reverse("hello")).toEqual("olleh");
  });
  test("Reverse reverses a string", () => {
    expect(reverse("  abcd")).toEqual("dcba  ");
  });
});
