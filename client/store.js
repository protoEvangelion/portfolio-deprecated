import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers'

import posts from './data/posts'

const defaultState = {
	posts,
	wikiSnippets: {}
}

const store = createStore(rootReducer, defaultState)

//sync redux with react router history
export const history = syncHistoryWithStore(browserHistory, store)

export default store