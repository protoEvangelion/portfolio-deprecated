import React from 'react'
import Header from '../Header'
import TopicsScreen from '../../containers/TopicsScreen'

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<TopicsScreen />
			</div>
		)
	}
}

export default Home

