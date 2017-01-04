import React, { Component } from 'react'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
	render() {
		return (
			<div>
				<p>Just testin it out</p>
			</div>
		)
	}
} 

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(HeaderContainer)