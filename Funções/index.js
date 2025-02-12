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

module.exports = gen;
