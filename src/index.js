import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router' 
import Wiki from './components/Wiki'

const root = document.getElementById('root');

export const Root = () => (
	<BrowserRouter>
			<Match exactly pattern="/" component={App} />
	</BrowserRouter>
)

if (!module.hot) render(<Root />, root)
