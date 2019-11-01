const reverseStringIterative = (str: String) => {
    let arr = [...str], reverse = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse += arr[i];
    }
    return reverse;
}


const reverseStringRecursive = (str: String) => {
    if (str.length === 1) {
        return str;
    }
    return str.charAt(str.length - 1) + reverseStringRecursive(str.slice(0, -1))
}


export { reverseStringIterative, reverseStringRecursive }