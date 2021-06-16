function checkAdult(age) {
	try {
		if (typeof age === 'undefined') {
			throw new Error('Error Please, enter your age');
		} else {
			if (typeof age !== 'number') {
				throw new Error('Error Please, enter number');
			} else {
				if (age < 0) {
					throw new Error('Error Please, enter positive number');
				} else if (age % 1 !== 0) {
					throw new Error('Error Please, enter Integer number');
				} else {
					if (age < 18) {
						throw new Error('Error Access denied - you are too young!');
					} else {
						throw new Error('Access allowed');
					}
				}
			}
		}
	} catch (err) {
		console.error(err);
	} finally {
		console.log('Age verification complete');
	}
}
console.log(checkAdult(-22));
