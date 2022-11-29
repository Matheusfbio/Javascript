/* The above code is sorting an array using the selection sort algorithm. */
const arr = [7, 1, 3, 5, 15, 10, 0];

const selectionSort = (arr) => {
  const len = arr.length;
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < len; i++) {
    let idxOfMin = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[idxOfMin]) idxOfMin = j;
    }

    if (idxOfMin !== i) swap(arr, idxOfMin, i);
  }

  return arr;
};

selectionSort(arr);
console.log(arr);
