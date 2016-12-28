	event.preventDefault()
	let text = this.state.value.replace(' ', '%20')
	let url = `https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${text}&utf8=&format=json`
	axios.get(url)
		.then(function(res) {
			console.log(res)
		})
		.catch(function(err) {
			console.log(err)
		})