import _ from 'lodash'
import React, { component } from 'react'
import Header from '../Header'
import TopicsScreen from '../../containers/TopicsScreen'

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<TopicsScreen />
				<ul>
					{_.map(this.props.rowsIdArray, this.renderRowById.bind(this))}
				</ul>
			</div>
		)
	}

	renderRowById(rowId) {
		return (
			<li key={rowId}>
				{this.props.renderRow(_.get(this.props.rowsById, rowId))}
			</li>
		)
	}
}

export default Home

