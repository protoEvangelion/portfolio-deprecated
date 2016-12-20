import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router' 
import Wiki from './components/Wiki'
import Home from './components/Home'
import NotFound from './components/NotFound'

const root = document.getElementById('root');

export const Root = () => (
	<BrowserRouter>
		<div>
			<Match exactly pattern="/" component={Home} />
			<Match pattern="/wikiViewer" component={Wiki} />
			<Miss component={NotFound} />
		</div>
	</BrowserRouter>
)

if (!module.hot) render(<Root />, root)
