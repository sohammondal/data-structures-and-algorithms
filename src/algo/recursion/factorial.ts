const factorialIterative = (number: number) => {
    let res = 1, temp = number;
    if (number === 0 || number === 1) return res;
    while (temp !== 1) {
        res = res * temp;
        temp--;

    }
    return res;
}

const factorialRecursive = (number: number) => {
    if (number <= 1) return 1;
    return number * factorialRecursive(number - 1);
}

export { factorialIterative, factorialRecursive }