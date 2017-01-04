import React, { Component } from 'react'
import Image from './Image'
import Tweet from './Tweet'
import urls from './img_urls'

let randPic = Math.floor((Math.random() * 100) + 1)

export default class Quote extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentUrl: 'http://www.brainyquote.com/photos/j/jesuschrist414650.jpg'
		}
		this.onBtnClick = this.onBtnClick.bind(this)
	}
	onBtnClick() {
		alert('maybe')
		this.setState({currentUrl: urls[randPic]})
	}
	render() {
		return (
			<div>
				<button 
					id="btn" 
					className="btn btn-primary btn-large"
					onClick={this.onBtnClick}>Pump Quote!
				</button>
				<Image url={this.state.currentUrl} />
		  </div>
		)
	}
}
