import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import { Router, browserHistory } from 'react-router'
import reducers from './reducers'
import routes from './routes/routes'
import promise from 'redux-promise'

import './css/global.css'
import './css/ihover.css'

const store = createStore(
  reducers,
  applyMiddleware(promise)
)

const App = () => {
  return (
		<Provider store={store} >
			<Router history={browserHistory} routes={routes} />
		</Provider>
  )
}

export default App
