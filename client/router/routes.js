import React from 'react'
import { Router, Route, browserHistory } from 'react-router' 

import Wiki from '../components/Wiki'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="wikiViewer" component={Wiki} />
		<Route path="*" component={NotFound} />
	</Router>
)

export default Routes
