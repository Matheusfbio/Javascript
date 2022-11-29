/**
 * If the array is empty or has one element, return the array, otherwise split the
 * array into two halves, sort each half, and merge the sorted halves.
 * @param array - The array to be sorted.
 * @returns [2, 4, 6, 9, 14, 22]
 */

function mergeSortTopDown(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

function mergeTopDown(left, right) {
  const array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  return array.concat(left.slice()).concat(right.slice());
}

(function test() {
  const testArray1 = [2, 14, 4, 9, 6, 22];

  console.log(mergeSortTopDown(testArray1));
})();
