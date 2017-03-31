import React, { Component } from 'react'
import Banner from './Banner'
import APIHeader from './APIHeader'
import VizHeader from './VizHeader'
import UtilityHeader from './UtilityHeader'
import Waypoint from 'react-waypoint'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showViz: false,
			showUtility: false
		}
	}
	renderViz() {
		return this.state.showViz === false
			? <div style={{width: '100%', height: '400px'}}></div>
			: <div><VizHeader /></div>
	}
	renderUtility() {
		return this.state.showUtility === false
			? <div style={{width: '100%', height: '400px'}}></div>
			: <div><UtilityHeader /></div>
	}
	enteredViz() {
		this.setState({showViz: true})
	}
	enteredUtility() {
		this.setState({showUtility: true})
	}
	render() {
		return (
			<div>
				<Banner />
				<APIHeader />
				<Waypoint onEnter={this.enteredViz.bind(this)}>
					{this.renderViz()}
				</Waypoint>
				<Waypoint onEnter={this.enteredUtility.bind(this)}>
					{this.renderUtility()}
				</Waypoint>
			</div>
		)
	}
}
