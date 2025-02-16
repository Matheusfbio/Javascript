function* gen(init, next) {
  let i = init;
  while (true) {
    yield i;
    i += next;
  }
  return i;
}

const count = gen(5, 2);

// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);

function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
// const fib = fibonacci(0, 1);

// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);

module.exports = { gen, fibonacci };
