const sumOfLen = (...string) => {
	let counter = 0;
	string.forEach((element) => (counter += element.length));
	return counter;
};
console.log(sumOfLen('hello', 'hi', 'my name', 'is'));