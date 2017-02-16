
let modifyUrl = (url) => {
	let modifiedUrl

	if(url.includes('https://www.bea.gov/api/data')) {
		const key = process.env.GDPAPIKEY
		console.log('returning', url + 'UserID=' + key)
		return url + 'UserID=' + key

	} else {
			console.log('no stuff')
			return url
	}
}

module.exports = modifyUrl
