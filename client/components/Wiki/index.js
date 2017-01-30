import React from 'react'
import Button from './Button'
import Search from './Search'
import Snippets from './Snippets'

import './style.css'

const elem = document.getElementById("wikiContainer")
elem.scrollIntoView(false)
class Wiki extends React.Component {
	render() {
		return (
			<div id="wikiContainer" style={{marginBottom: '500px'}}>
				<Button />
				<Search />
				<Snippets />
			</div>
		)
	}
}

export default Wiki
