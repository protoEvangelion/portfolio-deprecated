import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router' 
import Wiki from './components/Wiki'
import Home from './components/Home'
import NotFound from './components/NotFound'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from './store/reducers'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

const root = document.getElementById('root');

export const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home} />
				<Match pattern="/wikiViewer" component={Wiki} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	</Provider>
)

if (!module.hot) render(<Root />, root)
