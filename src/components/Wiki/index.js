import React from 'react'
import Button from './Button'
import Search from './Search'
import Header from '../Header'

class Wiki extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Button />
				<Search />
			</div>
		)
	}
}

export default Wiki