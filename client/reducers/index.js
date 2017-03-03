//reducers take in the action and copy of current state

import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'

import WikisReducer from './reducer_wikis'
import QuoteReducer from './reducer_quote'
import WeatherReducer from './reducer_weather'
import StreamReducer from './reducer_streams'

const rootReducer = combineReducers({
	form: formReducer,
	wikis : WikisReducer,
	quote: QuoteReducer,
	weather: WeatherReducer,
	streams: StreamReducer
})

export default rootReducer
