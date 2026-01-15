import Iterador from "./iterador.js";

const meuIterador = Iterador(['a', 'b', 'c']);

console.log(meuIterador.next()); // { value: 'a', done: false }
console.log(meuIterador.next()); // { value: 'b', done: false }
console.log(meuIterador.next()); // { value: 'c', done: false }
console.log(meuIterador.next()); // { value: undefined, done: true }
