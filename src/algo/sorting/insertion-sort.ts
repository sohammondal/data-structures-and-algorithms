const insertionSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] < arr[0]) {
            // splice - extract the smaller number from the array
            // unshift - add the smaller number to the beginning of the array
            arr.unshift(arr.splice(i, 1)[0]);
        } else {
            // only sort number smaller than number on the left of it. 
            // This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (arr[i] < arr[i - 1]) {
                //find where number should go
                for (let j = 1; j < i; j++) {
                    if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
                        // splice out the number from the array
                        const number = arr.splice(i, 1)[0]
                        //insert number in the right spot
                        arr.splice(j, 0, number);
                    }
                }
            }

        }
    }
    return arr;
}

export { insertionSort }