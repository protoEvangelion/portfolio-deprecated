import React from 'react'

export default (props) => {
	const text = props.text.replace(/ /g,'%20')
	return(
		<div className="row text-center">
			<div className="col-xs-4 col-xs-offset-4 text-center">
				<a 
					className="twitter-share-button"
				  href={`https://twitter.com/intent/tweet?text=${text}`}
				  data-size="large">
					Tweet
				</a>
			</div>
		</div>
	)
}