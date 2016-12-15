
function wikiCall(text) {

		let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${text}&utf8=&format=json`
		axios.get(url)
			.then(function(res) {
				this.setState({data: res.data.query.search})
				console.log(typeof(this.state))
			}.bind(this))
			.catch(function(err) {
				console.log(err)
			})
}

export { wikiCall }
