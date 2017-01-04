import React, { Component } from 'react'
import Image from './Image'
import Tweet from './Tweet'
import urls from './img_urls'

export default class Quote extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentUrl: 'http://www.brainyquote.com/photos/j/jesuschrist414650.jpg'
		}
	}
	onBtnClick() {
		this.setState({currentUrl: urls[Math.floor((Math.random() * 100) + 1)]})
	}
	render() {
		return (
			<div className="container text-center">
				<button 
					id="btn" 
					className="btn btn-primary btn-large"
					style={{margin: "20px"}}
					onClick={this.onBtnClick.bind(this)}>Pump Quote!
				</button>
				<Image url={this.state.currentUrl} />
		  </div>
		)
	}
}
