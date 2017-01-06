import React from 'react'

export default (props) => {
	const author = props.quote.quoteAuthor.replace(/ /g,'')
	const text = props.quote.quoteText.replace(/ /g,'%20')
	return(
		<a 
			className="twitter-share-button"
		  href={`https://twitter.com/intent/tweet?text=#${author}%20${text}`}
		  data-size="large">
			Tweet
		</a>
	)
}