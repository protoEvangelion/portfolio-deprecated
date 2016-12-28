import { combineReducers } from 'redux'

import wikiSnippets from './wikiSnippets'

const rootReducer = combineReducers({
	wikiSnippets,
})

export default rootReducer