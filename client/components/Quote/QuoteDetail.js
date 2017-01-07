import React, {Component} from 'react'

let typeAnimate = 'fadeIn'
let count = 0

let colors = [
	['#F1F2B5', '#135058'],
	['#7b4397', '#dc2430'],
	['#8e9eab', '#eef2f3'],
	['#136a8a', '#267871'],
	['#ff0084', '#33001b'],
	['#6441A5', '#2a0845'],
	['#ffb347', '#ffcc33'],
	['#43cea2', '#185a9d'],
	['#D38312', '#A83279'],
	['#00c6ff', '#0072ff'],
	['#B3FFAB', '#12FFF7']
]
let style={
	background: '#B3FFAB', 
	background: 'webkit-linear-gradient(to left, #B3FFAB , #12FFF7)',
	background: 'linear-gradient(to left, #B3FFAB , #12FFF7)'
}

export default class QuoteDetail extends Component {
	componentWillUpdate(nextProps) {
		++count
		if(count % 2 === 1) {
			typeAnimate = 'fadeInLeft'
		} else {
			typeAnimate = 'fadeInRight'
		}
	}
	render() {
		const quoteText = !this.props.quote.quoteText ? 'Please click Pump Quote again :)' : this.props.quote.quoteText
		const quoteAuthor = !this.props.quote.quoteAuthor ? 'unknown' : this.props.quote.quoteAuthor
		const key = this.props.quote.quoteUrl 
		return (
			<div className={`jumbotron animated ${typeAnimate}`} style={style}>
				<h2>{this.props.quote.quoteText}</h2>
				<h3>~{quoteAuthor}</h3>
			</div>
		)
	}
}

