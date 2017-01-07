//reducers take in the action and copy of current state

import { combineReducers } from 'redux'

import Books from './books_reducer'
import WikisReducer from './reducer_wikis'
import QuoteReducer from './reducer_quote'

const rootReducer = combineReducers({
	wikis : WikisReducer,
	quote: QuoteReducer
})

export default rootReducer