import React, { Component } from 'react'
import Header from '../Header'
import Counter from './Counter'

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Counter />
			</div>
		)
	}
}

export default Home

