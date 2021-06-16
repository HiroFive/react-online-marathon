const maxInterv = (...args) => {
	let currentInterval = 0;
	args.forEach((value, index) => {
		let tempInterval = Math.abs(
			Math.abs(value) -
				Math.abs(args[args.length === index ? index : index + 1])
		);
		currentInterval =
			tempInterval > currentInterval ? tempInterval : currentInterval;
	});
	return currentInterval;
};

console.log(maxInterv(3, 5, 2, 7, 11, 0, -2));
