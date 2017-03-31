import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promise from 'redux-promise'
import middlewares from './middlewares'
import reducer from './reducer'

const configureStore = (initialState, history) => {
  const hasWindow = typeof window !== 'undefined'

  const finalCreateStore = compose(
    applyMiddleware(
      ...middlewares,
      promise,
      routerMiddleware(history)),
    hasWindow && window.devToolsExtension
      ? window.devToolsExtension()
      : (f) => f
  )(createStore)

  const store = finalCreateStore(reducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
