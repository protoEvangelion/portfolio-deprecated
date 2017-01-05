import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default (props) => {
	return (
		<div className='application'>
			<Helmet
				meta={[
					{name: 'twitter:card', content: 'summary_large_image'},
					{name: 'twitter:site', content: '@BrainyQuote'},
					{name: 'twitter:title', content: 'Cool quote from BrainyQuote'},
					{name: 'twitter:description', content: 'This quote is awesome!'},
					{name: 'twitter:image', content: props.currentUrl}
				]} />
		</div>
	)
}
