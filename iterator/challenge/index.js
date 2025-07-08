export default function createIteratorPar(limit) {
  return {
    [Symbol.iterator]: function* () {
      for (let index = 0; index <= limit; index += 2) {
        yield index
      }

    }
  }
}

console.log([...createIteratorPar(12)]);
