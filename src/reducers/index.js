import camelCase from 'lodash/camelCase'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

export default store
