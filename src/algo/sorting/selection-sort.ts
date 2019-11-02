const selectionSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let pointer = i; // pointer to the index of smallest item in the array
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[pointer]) { // update the pointer if current value is less
                pointer = j;
            }
        }
        //Swap the smallest item to the top of the array
        const temp = arr[i];
        arr[i] = arr[pointer];
        arr[pointer] = temp;
    }
    return arr;
}

export { selectionSort }