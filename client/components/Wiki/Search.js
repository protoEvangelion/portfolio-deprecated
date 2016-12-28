import React from 'react'
import axios from 'axios'
import WikiArticle from './WikiArticle'
import './style.css'


export default class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			data: []
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
		axios.post('/api/wikisnippets', {
			text: text
		})
		console.log('made it')
	}
	render() {
		console.log('this is state ', this.state.data)
		return (
			<div>
				<form onSubmit={this.handleSubmit} action="" method="POST">
					<input type="text" value={this.state.value || ''} onChange={this.handleChange} placeholder="Search..." />
					<img className="icon" src={require('./magGlass.png')} onClick={this.handleSubmit} alt="search" width="20px" height="20px" />
				</form>
				<WikiArticle snippets={JSON.stringify(this.state.data)}/>
			</div>
		)
	}
  
}
