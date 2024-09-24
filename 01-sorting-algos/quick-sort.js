function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];

console.log(pivot(arr));
