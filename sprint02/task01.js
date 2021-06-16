const filterNums = (numArray, num = 0, parameter = 'greater') => {
    return numArray.filter((val) => {
		return parameter === 'greater' ? num < val : num > val;
	});
};
console.log(filterNums([-1, 2, 4, 0, 55, -12, 3], 11));