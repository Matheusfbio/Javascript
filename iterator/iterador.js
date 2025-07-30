// const values = [1, 5, 4, 5, 2, 3]

// const it_values = values[Symbol.iterator]()
// console.log(it_values.next());
// console.log(it_values.next());
// console.log(it_values.next());
// console.log(it_values.next());
// console.log(it_values.next());
// console.log(it_values.next());
// console.log(it_values.next());


// function iterator([value]) {
//   return value.next()
// }

// iterator(values)

// console.log(iterator);


export default function Iterador(array) {
  let index = 0;

  return {
    next: function () {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}
