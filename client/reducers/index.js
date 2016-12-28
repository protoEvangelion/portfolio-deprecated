//reducers take in the action and copy of current state

import { combineReducers } from 'redux'

import wikiSnippets from './wikiSnippetsReducer'

const rootReducer = combineReducers({
	wikiSnippets,
})

export default rootReducer