function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1)
}

function processArray(arr, factorial) {
    return arr.map(value => factorial(value))
}

console.log([1, 2, 3, 4, 5], factorial)