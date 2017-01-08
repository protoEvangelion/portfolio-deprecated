const forismatic = require('forismatic-node')
let randNum = Math.floor((Math.random() * 100000) + 1);
const axios = require('axios')
module.exports = {
	random: () => {	
		const url = `http://api.forismatic.com/api/1.0/?&format=json&lang=en&method=getQuote&key=${randNum}`
		axios.get(url)
			.then(function(resp) {
				res.send(resp.data)
			})
			.catch(function(err) {
				console.log(err)
			})
	}
}