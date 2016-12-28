import { createStore, compose } from 'redux'

import rootReducer from './reducers'

const defaultState = {
	wikiInput: '',
	wikiSnippets: {}
}

const store = createStore(rootReducer, defaultState)

export default store