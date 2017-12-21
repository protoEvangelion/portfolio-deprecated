import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import navbarReducer from './navbar/reducer'
import quoteReducer from './quote/reducer'
import streamReducer from './stream/reducer'
import weatherReducer from './weather/reducer'
import wikiReducer from './wiki/reducer'

const reducers = {
  form: formReducer,
  navbar: navbarReducer,
  quote: quoteReducer,
  stream: streamReducer,
  weather: weatherReducer,
  wiki: wikiReducer,
}

export default combineReducers(reducers)
