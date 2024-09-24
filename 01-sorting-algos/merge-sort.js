// helper to combine two sorted arrays into 1
function merge(arr1, arr2) {
  const result = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1++;
    } else if (arr2[idx2] < arr1[idx1]) {
      result.push(arr2[idx2]);
      idx2++;
    } else {
      result.push(arr1[idx1]);
      result.push(arr2[idx2]);
      idx1++;
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    result.push(arr1[idx1]);
    idx1++;
  }

  while (idx2 < arr2.length) {
    result.push(arr2[idx2]);
    idx2++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  const secondHalf = arr.slice(Math.floor(arr.length / 2));
  mergeSort(firstHalf);
  mergeSort(secondHalf);
  return merge(firstHalf, secondHalf);
}
const arr = [10, 24, 76, 73];
console.log(mergeSort(arr));
