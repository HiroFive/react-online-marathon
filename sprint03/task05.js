function mapCreator(keys, values) {
	const newMap = new Map();
	keys.forEach((key, index) => {
		if (typeof values[index] == 'string') {
			newMap.set(key, values[index]);
		}
	});
	return newMap;
}
const map = mapCreator(
	[1, 2, 3, 4, 5, 6, 7],
	['Lviv', 23, 'Kyiv', 'Dnipro', 'Kharkiv', 'Chernivtsi', true]
);
console.log(map);
map.size; // 7
map.get(2); // Lviv

console.log(map.size);
console.log(map.get(2));
