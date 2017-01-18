import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { Router, browserHistory } from 'react-router'
import reducers from '../reducers'
import routes from '../router/routes.js'
import promise from 'redux-promise'

function configureStore() {
	//create redux store
	const store = createStore(
		reducers,
		applyMiddleware(promise)
	)

	//you have to enable hot modules replacement for reducers as well
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}

const store = configureStore()

const ReduxProvider = () => {
	return (
		<Provider store={store} >
			<Router history={browserHistory}>
				{routes}
			</Router>
		</Provider>
	)
}

export default ReduxProvider
