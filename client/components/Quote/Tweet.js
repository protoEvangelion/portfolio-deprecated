import React from 'react'
import { TwitterButton } from 'react-social'


export default (props) => {
	const link = props.quote.quoteLink
	const text = props.quote.quoteText
	return(
	<div>	
		<TwitterButton 
			style={{border: 'none', background: 'white', padding: '0', margin: '0 0 20px 0'}}
			url={link}
		  message={`${text} #coolquotes`}>
			  <a className="btn btn-social-icon btn-twitter">
			    <span className="fa fa-twitter"></span>
			  </a>
		</TwitterButton>
	</div>
	)
}