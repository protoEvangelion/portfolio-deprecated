import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducers from './reducers'
import Routes from './routes'
import promise from 'redux-promise'

import './css/global.css'
import './css/ihover.css'

import Header from './components/Main/Header'
import Footer from './components/Main/Footer'

const store = createStore(
  reducers,
  applyMiddleware(promise)
)

const App = () => {
  return (
    <div>
      <Provider store={store} >
        <Router basename="/">
          <Routes />
        </Router>
      </Provider>
    </div>
  )
}

export default App
