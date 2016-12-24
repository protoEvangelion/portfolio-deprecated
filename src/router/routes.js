import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router' 
import Wiki from '../components/Wiki'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

const Routes = () => (
	<BrowserRouter>
		<div>
			<Match exactly pattern="/" component={Home} />
			<Match pattern="/wikiViewer" component={Wiki} />
			<Miss component={NotFound} />
		</div>
	</BrowserRouter>	
)

export default Routes
