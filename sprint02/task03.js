const howMuchSec = (
	seconds = 0,
	minutes = 0,
	hours = 0,
	days = 0,
	weeks = 0,
	months = 0,
	years = 0
) => {
	return (
		seconds +
		minutes * 60 +
		hours * 3600 +
		days * 3600 * 24 +
		weeks * 3600 * 24 * 7 +
		months * 3600 * 24 * 7 * 30 +
		years * 3600 * 24 * 7 * 30 * 12
	);
};

console.log(howMuchSec(12, 3, 3, 3));