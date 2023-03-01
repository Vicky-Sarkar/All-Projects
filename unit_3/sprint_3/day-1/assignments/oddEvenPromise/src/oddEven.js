function getData(data) {
	return new Promise((resolve, reject) => {


		if (data == typeof (String(data))) {
			reject("error")
		}


		setTimeout(() => {
			if (data % 2 === 1) {
				resolve("odd")
			}
		}, 3000)

		if (data % 2 === 0) {
			setTimeout(() => {
				resolve("even")
			}, 4000)
		}
	})


}

export default getData
