function add(x, y) {
	return new Promise((resolve, reject) => {
		!isNaN(x) && !isNaN(y) ? resolve(x + y) : reject('Error!');
	});
}
