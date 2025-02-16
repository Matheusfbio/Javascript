const { MockPromise } = require("./index");

// jest.useFakeTimers();

test("MockPromise function defined", () => {
  const mock = MockPromise();
  expect(MockPromise).toBeDefined();
});
// test("deve resolver com 'AAAEEEE' quando result for true", async () => {
//   const mockPromise = MockPromise({ result: true, time: 1000 });

//   jest.advanceTimersByTime(1000); // Avançar o tempo em 1000ms
//   await expect(mockPromise).toBeCall();
// });
