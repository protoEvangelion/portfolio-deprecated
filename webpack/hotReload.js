import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as Hot } from 'react-hot-loader'

import { Root } from '../src'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
require('babel-polyfill')

const render = () => {
  ReactDOM.render(
  	<Hot>
  		<Root />
  	</Hot>, 
  	document.getElementById('root'))
}

render()

module.hot.accept('../src', render)