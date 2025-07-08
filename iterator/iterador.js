const values = [1, 5, 4, 5, 2, 3]

const it_values = values[Symbol.iterator]()
console.log(it_values.next());
console.log(it_values.next());
console.log(it_values.next());
console.log(it_values.next());
console.log(it_values.next());
console.log(it_values.next());
console.log(it_values.next());


export default function iterator([value]) {
  return value.next()
}

iterator(values)

console.log(iterator);


