function insertionSortEx(arr) {
    // debugger;
    for (let i = 1; i < arr.length; i++) {
        // 1. Start with the second element (index 1)
        const current = arr[i]; // The element we're trying to insert
        // 2. Find the correct position for the current element
        let j = i - 1; // Start from the element before the current one
        while (j >= 0 && arr[j] > current) { // While j is within bounds and the element at j is greater than current
            // Shift the element at j one position to the right
            arr[j + 1] = arr[j];
            j--; // Move to the previous element
            console.log({ arr })
        }

        // 3. Insert the current element in its correct position
        arr[j + 1] = current;
        console.log(arr)
    }

    return arr;
}
const unsortedArray1 = [4, 5, 1];
// const unsortedArray1 = [1, 4];


// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j];
//             console.log(arr)
//         }
//         arr[j + 1] = currentVal
//     }
//     return arr;

// }

const unsortedArray = [2, 1, 9, 76, 4];
insertionSortEx(unsortedArray1)