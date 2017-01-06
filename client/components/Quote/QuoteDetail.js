import React from 'react'

export default (props) => {
	const quoteText = !props.quote.quoteText ? 'Please click Pump Quote again :)' : props.quote.quoteText

	const quoteAuthor = !props.quote.quoteAuthor ? 'unknown' : props.quote.quoteAuthor
	
	return (
		<div className="jumbotron">
			<h2>{props.quote.quoteText}</h2>
			<h3>~{quoteAuthor}</h3>
		</div>
	)
}