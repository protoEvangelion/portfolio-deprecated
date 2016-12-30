import React from 'react'
import { Router, Route, browserHistory } from 'react-router' 
import { Provider } from 'react-redux'
import store, { history } from '../store'

import Wiki from '../components/Wiki'
import CounterContainer from '../components/Home/CounterContainer'
import NotFound from '../components/NotFound'

const Routes = () => (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={CounterContainer} />
			<Route path="wikiViewer" component={Wiki} />
			<Route path="*" component={NotFound} />
		</Router>
	</Provider>
)

export default Routes
