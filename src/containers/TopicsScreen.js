import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as topicsActions from '../store/topics/actions'
import * as topicsSelectors from '../store/topics/reducer'
import ListView from '../components/Home'

class TopicsScreen extends Component {
	componentDidMount() {
		this.props.dispatch(topicsActions.fetchTopics())
	}
	render() {
		if(!this.props.rowsById) return this.renderLoading()
		return (
			<div className="TopicsScreen">
				<ListView
					rowsIdArray={this.props.rowsIdArray}
					rowsById={this.props.rowsById}
					renderRow={this.renderRow} />
			</div>
		)
	}

	renderLoading() {
		return (
			<p>Loading...</p>
		)
	}

	renderRow(row) {
		return (
			<div>	
				<h3>{row.title}</h3>
				<p>{row.description}</p>
			</div>
		)
	}
}

// which props we want to inject?
const mapStateToProps = (state) => {
	return {
		rowsById: topicsSelectors.getTopicsByUrl(state),
		rowsByArray: topicsSelectors.getTopicsByUrlArray(state)
	}
}

export default connect(mapStateToProps)(TopicsScreen)
