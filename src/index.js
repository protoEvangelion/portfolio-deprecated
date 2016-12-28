import React from 'react'
import { render } from 'react-dom'
import Routes from './router/Routes.js'

const root = document.getElementById('root');

export const Root = () => (
		<Routes />
)

if (!module.hot) render(<Root />, root)
