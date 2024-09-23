// sorting algorithm
// is the current > than next?
// -> if so swap
// outer loop starts at the back
// loop through and keep doing it until no swap

function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// [100, 3, 1, 2, 5]
// [1, 2, 3, Sorted: 5, 100]



function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true;
            }
        }

    } while (swapped);
    return arr;
}




const arr2 = [1, 4, 3, 2]
const arr3 = [1, 3, 2, 4]
const arr4 = [1, 2, 3, 4]

const arr = [9, 100, 7, 6, 4, 1, 1, 2, 2, 2, 5]

console.log(bubbleSort(arr))
console.log(bubbleSort(arr2))
console.log(bubbleSort(arr3))
console.log(bubbleSort(arr4))

function bubbleSort(arr) {
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return
    arr;
}