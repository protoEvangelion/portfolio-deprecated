import withRedux from 'next-redux-wrapper'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  )

  return store
}

export function connectRedux(...connectArgs) {
  return BaseComponent =>
    withRedux(configureStore, ...connectArgs)(BaseComponent)
}
