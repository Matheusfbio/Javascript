/*
  Array - Arrays são sequências ordenadas de valores.
  Eles são rápidos para acessar e lentos para remover no meio.
  E aparecem em absolutamente tudo: responses de API, listas, filtros, tabelas, renderização.
*/
const arrays = [1, 2, 3, 4, 5];

// arrays.push(6); // add element to the end O(1)

// arrays.pop(); // remove last element O(1)

// arrays.shift(); // remove first element O(n)

// arrays.unshift(4); // add element to the beginning O(n)

arrays.splice(1, 1, 22); // add element at index 2 O(n)

console.log(`You Acessed the Array: ${arrays[0]}`);
console.log(`Array: ${arrays}`);
console.log(`The size of array is: ${arrays.length}`);
