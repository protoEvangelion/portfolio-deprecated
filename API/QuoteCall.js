const axios = require('axios')
module.exports = {
	random: (res) => {	
		let randNum = Math.floor((Math.random() * 100000) + 1)
		let url = `http://api.forismatic.com/api/1.0/?&method=getQuote&key=${randNum}&format=json&lang=en`
		axios.get(url)
			.then((resp) => {
				res.send(resp.data)
			})
			.catch((err) => {
				console.log(err)
			})
		}
}