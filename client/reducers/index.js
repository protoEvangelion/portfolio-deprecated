//reducers take in the action and copy of current state

import { combineReducers } from 'redux'

import WikisReducer from './reducer_wikis'
import QuoteReducer from './reducer_quote'
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
	wikis : WikisReducer,
	quote: QuoteReducer,
	weather: WeatherReducer
})

export default rootReducer