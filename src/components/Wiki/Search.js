import React from 'react'
import axios from 'axios'
import WikiArticle from './WikiArticle'

export default class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			data: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(event) {
		this.setState({value: event.target.value})
	}
	handleSubmit(event) {
		event.preventDefault()
		let text = this.state.value.replace(' ', '%20')
		let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${text}&utf8=&format=json`
		axios.get(url)
			.then(function(res) {
				console.log(res.data.query.search)
				this.setState({data: 'yo'})
			})
			.catch(function(err) {
				console.log(err)
			})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} action="" method="GET">
					<input type="text" value={this.state.value || ''} onChange={this.handleChange} placeholder="Search..." />
					<img src="../../img/magGlass.png" onClick={this.handleSubmit} alt="search" width="20px" height="20px" />
				</form>
			</div>
		)
	}
  
}
