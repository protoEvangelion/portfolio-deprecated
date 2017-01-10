import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from './chart'
import GoogleMap from './GoogleMap'


class WeatherList extends Component {
	renderWeather(cityData) {
		if(cityData) {
			console.log('citydata', cityData)
			const name = cityData.city.name
			const temps = cityData.list.map(weather => weather.main.temp * (9/5) - 459.67)
			const pressures = cityData.list.map(weather => weather.main.pressure)
			const humidities = cityData.list.map(weather => weather.main.humidity)
			const { lon, lat } = cityData.city.coord

			return (
				<tr height={105} key={name}>
					<td><GoogleMap lon={lon} lat={lat} /></td>
					<td><Chart data={temps} color="orange" units="°F" /></td>
					<td><Chart data={pressures} color="red" units="hPa" /></td>
					<td><Chart data={humidities} color="blue" units="%" /></td>
				</tr>
			)
		} else {
			return
		}
	}
	render() {
		return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<table className="table table-hover">
						<thead>
							<tr>
								<th>City</th>
								<th>Temperature (°F)</th>
								<th>Pressure (hPa)</th>
								<th>Humidity (%)</th>
							</tr>
						</thead>
						<tbody>
							{this.props.weather.map(this.renderWeather)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList)
