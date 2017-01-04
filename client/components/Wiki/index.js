import React from 'react'
import Button from './Button'
import Search from './Search'
import Snippets from './Snippets'

import './style.css'

class Wiki extends React.Component {
	render() {
		return (
			<div>
				<Button />
				<Search />
				<Snippets />
			</div>
		)
	}
}

export default Wiki