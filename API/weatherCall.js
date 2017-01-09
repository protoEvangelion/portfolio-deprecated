const axios = require('axios')
module.exports = {
	city: (res, city) => {
		let API_KEY = '248f4ff9366b7a46104566e76bd7aa11'
		let ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
		let url = `${ROOT_URL}&q=${city},us`
		axios.get(url, {

		})
			.then((resp) => {
				res.send({data: 'hi'})
			})
			.catch((err) => {
				console.log('getting error', err)
			})
	}
}