const URL = require('url-parse')

let modifyUrl = (originalUrl) => {
	let url = new URL(originalUrl)
	url = url.query.slice(5) + process.env.GDPAPIKEY
	console.log('url', url)
	return url
}

module.exports = modifyUrl
