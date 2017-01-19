import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer as Hot} from 'react-hot-loader'

import { Root } from '../client/index.js'

const render = () => {
  ReactDOM.render(
    <Hot><Root/></Hot>,
    document.getElementById('root'))
}

render()

module.hot.accept('../client/index.js', render)
