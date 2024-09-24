// helper to combine two sorted arrays into 1
function combineArray(arr1, arr2) {
  debugger;
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
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(combineArray(arr1, arr2));
