function job(delay, value) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, delay);
	});
}

var results = Promise.all([job(1000, 10), job(3000, 20), job(500, 30), job(1500, 40)]).then((values) => {
	return values
});



//create 4 such promises, with delays of 1000, 3000, 500, 1500 and values of 10, 20, 30, 40 respectively
export { job, results };
