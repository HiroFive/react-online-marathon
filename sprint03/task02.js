const product = function () {
	return [].reduce.call(
		arguments,
		function (res, elem) {
			return res * elem;
		},
		this.product
	);
};

const contextObj = {
	product: 10,
};

const getProduct = (...args) => {
   return product.bind(contextObj, 2, 3, ...args)()
};
console.log(getProduct(4,5))