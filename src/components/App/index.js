import React from 'react'
import { Match, Miss } from 'react-router'
import Wiki from '../Wiki'

function App() {
	return (
		<div>
			<Match exactly pattern="/" component={Wiki} />
		</div>
	)
}

export default App
