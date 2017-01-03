//reducers take in the action and copy of current state

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Books from './books_reducer'
import WikisReducer from './reducer_wikis'

const rootReducer = combineReducers({
	wikis : WikisReducer
})

export default rootReducer