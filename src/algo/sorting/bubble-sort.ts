const bubbleSort = (arr: Array<number | string>) => {
    const len = arr.length;
    for (let i = 0, temp = len; i < len; i++ , temp--) {
        debugger
        for (let j = 0; j < temp; j++) {
            if (arr[j] > arr[j + 1]) {
                //Swap the numbers
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

export { bubbleSort }