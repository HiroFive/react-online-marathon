function modifyArray(array) {
    array[0] = 'Start'
    array[array.length - 1] = 'End'
    return array
}

console.log(modifyArray([1, 2, 3, 4, 5, 6]))