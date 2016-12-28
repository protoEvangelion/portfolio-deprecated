import React from 'react'
import { render } from 'react-dom'

import Routes from './router/Routes.js'
import store from './store'

const root = document.getElementById('root');

render(<Routes/>, root)


