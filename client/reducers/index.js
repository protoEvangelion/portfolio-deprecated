//reducers take in the action and copy of current state

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './postsReducer'
import wikiSnippets from './wikiSnippetsReducer'

const rootReducer = combineReducers({
	posts,
	wikiSnippets,
	routing: routerReducer
})

export default rootReducer