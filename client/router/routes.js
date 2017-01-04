import React from 'react'
import { Route, IndexRoute } from 'react-router' 

import App from '../components/App.js'
import Home from '../components/Home'
import Wiki from '../components/Wiki'
import Quote from '../components/Quote'
import NotFound from '../components/NotFound'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="wikiViewer" component={Wiki} />
		<Route path="quotepump" component={Quote} />
		<Route path="*" component={NotFound} />
	</Route>
)


		// <Route path="*" component={NotFound} />