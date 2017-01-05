import React, { Component } from 'react'
import Head from './MetaTag'
import QuoteDetail from './QuoteDetail'
import PumpBtn from './PumpBtn'
import Tweet from './Tweet'
// import urls from './img_urls'
import { fetchQuote } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Quote extends Component {
	render() {
		return (
			<div>
				<Head currentUrl={this.props.quote.quoteLink} />
				<div className="container text-center">
					<PumpBtn onClick={this.props.fetchQuote.bind(this)} />
					<QuoteDetail quote={this.props.quote}/>
					<Tweet text={this.props.quote.quoteText} />
			  </div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		quote: state.quote.quote
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchQuote }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
