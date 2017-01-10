//reducers take in the action and copy of current state

import { combineReducers } from 'redux'

import WikisReducer from './reducer_wikis'
import QuoteReducer from './reducer_quote'
import WeatherReducer from './reducer_weather'
import GeoData from './reducer_geoData'

const rootReducer = combineReducers({
	wikis : WikisReducer,
	quote: QuoteReducer,
	weather: WeatherReducer,
	geodata: GeoData
})

export default rootReducer