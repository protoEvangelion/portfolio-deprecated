import React, { Component } from 'react'
import { connect } from 'react-redux'

class Snippets extends Component {
	renderSnippets(snippet, i) {
		const url =  `https://en.wikipedia.org/wiki/${snippet.title}`
		let text = snippet.snippet.replace(/<\/?[^>]+(>|$)/g, '').replace(/&quot;/g, '\"')
		return (
			<div key={`d${i}`} className="snippet">
				<p key={`p${i}`} id={`q${i}`}>{snippet.title}</p>
				<a key={`a${i}`} className={`a${i}`} href={url}>
					<p key={`t${i}`} id={`s${i}`}>{text}</p>
				</a>
			</div>
		)	
	}
	render() {
		if(this.props.wikis.length === 0) {
			return (<div></div>)
		} else {
				return (
					<div>
						{this.props.wikis[0].map(this.renderSnippets)}
					</div>
				)
		}

	}
}

function mapStateToProps(state) {
	return {
		wikis: state.wikis
	}
}

export default connect(mapStateToProps)(Snippets)
