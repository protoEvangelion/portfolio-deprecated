import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { Router, browserHistory } from 'react-router'
import reducers from './reducers'
import routes from './router/routes.js'
import promise from 'redux-promise'

import { AppContainer } from 'react-hot-loader'

const store = createStore(
	reducers,
	applyMiddleware(promise)
)

const root = document.getElementById('root')

const renderApp = () => {
	render(
		<AppContainer>
			<Provider store={store} >
				<Router history={browserHistory} routes={routes} />
			</Provider>
		</AppContainer>
	,	root)
}

renderApp()
