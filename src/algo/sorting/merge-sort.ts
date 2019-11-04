const mergeSort = (arr) => {
    const len = arr.length;
    if (len === 1) return arr;
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

const merge = (left, right) => {
    const result = [];
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export { mergeSort }