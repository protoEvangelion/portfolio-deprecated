//reducers take in the action and copy of current state

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import counter from './counter'

const rootReducer = combineReducers({
	counter,
	routing: routerReducer
})

export default rootReducer