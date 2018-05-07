import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Footer, Navbar } from 'components/organisms'

import './global.css'
import './ihover.css'

const BaseLayout = props => {
	return (
		<Fragment>
			<Helmet
				title="Interactive Floor Plan"
				meta={[
					{
						name: 'description',
						content: 'My portfolio',
					},
					{
						name: 'keywords',
						content: 'gatsby, firebase, react, redux, es6, serverless',
					},
				]}
			>
				<link
					href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
					rel="stylesheet"
				/>
			</Helmet>

			<Navbar />

			{props.children()}

			<Footer />
		</Fragment>
	)
}

BaseLayout.propTypes = {
	location: PropTypes.object,
	children: PropTypes.any,
}

export default BaseLayout
