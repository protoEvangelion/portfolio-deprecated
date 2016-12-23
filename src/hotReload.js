import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as Hot } from 'react-hot-loader'

import { Root } from './'

const render = () => {
  ReactDOM.render(<Hot><Root /></Hot>, document.querySelector('root'))
}

render()

module.hot.accept('./', render)