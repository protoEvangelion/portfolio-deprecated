import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as topicsActions from '../store/topics/actions'

class TopicsScreen extends Component {
	componentDidMount() {
		this.props.dispatch(topicsActions.fetchTopics())
	}
	render() {
		return (
			<h2>Where are my topics?!!!!??!?!</h2>
		)
	}
}

// which props we want to inject?
const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps)(TopicsScreen)
