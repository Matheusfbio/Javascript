// function BinarySearch(list, item) {
//   let low = 0
//   let high = list.length - 1

//   while (low <= high) {
//     mid = Math.floor((low + high) / 2)
//     shoot = list[mid]

//     if (list[mid] === item) {
//       return mid
//     } if (list[mid] < item) {
//       low = mid + 1
//     } else {
//       high = mid - 1
//     }
//     return -1
//   }
// }


function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2);

  if (start > end) {
    return `The value ${target} that you are searching is not exist`;
  }

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

const arrayList = [2, 3, 6, 8, 12, 15, 20, 23, 27, 31]
const goal = 23
const result = binarySearch(arrayList, goal)
console.log(result);
