function combineArray(arr1, arr2) {
    return arr1.concat(arr2).filter(val=> typeof val == 'number')
}
console.log(combineArray(['Roma', true, 1.58, 25], [15, 'Title', false, 1.58]))