import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../../actions/fetchWeather'
import { bindActionCreators } from 'redux'
import axios from 'axios'

class MyArea extends Component {
	constructor(props) {
		super(props)
		this.state = {geo: ''}
		this.onBtnClick = this.onBtnClick.bind(this)
	}
	onBtnClick() {
	  navigator.geolocation.getCurrentPosition(position => {
  		const lat = position.coords.latitude
  		const lng = position.coords.longitude
  		const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng='
  		const reqUrl = `${ROOT_URL}${lat},${lng}`
			const url = `http://localhost:3000/api?url=${reqUrl}`
			axios.get(url)
				.then(response => {
					const address = response.data.results[0].formatted_address
					const end = address.slice(address.indexOf(',') + 2)
					const city = end.slice(0, end.indexOf(','))
					this.props.fetchWeather(city)
				})
				.catch(err => {
					console.log(err)
				})
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
	return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(MyArea)
