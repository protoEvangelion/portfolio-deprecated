const axios = require('axios')
module.exports = {
	snippet: (res, term) => {
		const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${term}&utf8=&format=json`
		axios.get(url)
			.then((resp) => {
				res.send(resp.data.query.search)
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
	