import React from 'react'

export default (props) => {
	const quoteAuthor = !props.quote.quoteAuthor ? 'unknown' : props.quote.quoteAuthor
	return (
		<div>
			<h2>{props.quote.quoteText}</h2>
			<h3>~{quoteAuthor}</h3>
		</div>
	)
}