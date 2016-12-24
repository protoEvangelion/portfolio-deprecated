import React from 'react'
import { render } from 'react-dom'
import Routes from './router/Routes.js'

// Redux imports 
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './store/reducers'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

const root = document.getElementById('root');

export const Root = () => (
	<Provider store={store}>
		<Routes />
	</Provider>
)

if (!module.hot) render(<Root />, root)
