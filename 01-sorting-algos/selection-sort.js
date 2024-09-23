// Places the smallest values into sorted position
//Swap the elements


function selectionSortExample(arr) {
    // Make the first element the minimum
    for (let i = 0; i < arr.length; i++) {
        let lowest = i  // the index of the lowest element
        for (let j = i + 1; j < arr.length; j++) {
            // Compare lowest with each element in the arr to find minimum value
            if (arr[j] < arr[lowest]) {
                // If we find a new low, update lowest to lowest index
                lowest = j;
            }
        }
        // Swap after end of inner for loop with the element at i and the lowest index
        // Only if the element is not itself
        if (i !== lowest) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
            console.log("s")
        }
    }
    return arr


}
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i; // current lowest index 
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }  // end inner loop that finds lowest value's index
        if (i !== lowest) {
            // swap the lowest to i, and the i to the lowest idx
            // 
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }
    }
    return arr;
}


const unsortedArray = [5, 2, 8, 1, 3, 7, 4, 6];
console.log(selectionSort(unsortedArray))