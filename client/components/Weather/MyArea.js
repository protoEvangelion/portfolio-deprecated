import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGeoData } from '../../actions/fetchGeoData'
import { bindActionCreators } from 'redux'
import axios from 'axios'

class MyArea extends Component {
	constructor(props) {
		super(props)
		this.onBtnClick = this.onBtnClick.bind(this)
	}
	onBtnClick() {
	  navigator.geolocation.getCurrentPosition(position => {
  		const lat = position.coords.latitude
  		const lng = position.coords.longitude
  		this.props.fetchGeoData(lat, lng)
	  })
	}
	render() {
		return (
			<div className='text-center'>	
				<button onClick={this.onBtnClick} id='locationBtn' className='btn btn-primary'>Get your location's weather</button>
			</div>
		)	
	}
	
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchGeoData }, dispatch)
}

export default connect(null, mapDispatchToProps)(MyArea)