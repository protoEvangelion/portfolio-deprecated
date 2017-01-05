import React, { Component } from 'react'
import styled from 'styled-components'

export default class PumpBtn extends Component {
	constructor(props) {
		super(props)
		this.state={cursor: 'pointer'}
	}
	dualOnClick() {
		this.props.onClick();
		() => {
			this.setState({cursor: 'wait'})
		}
		setTimeout(function(){
			this.setState({cursor: 'pointer'})
		}, 3000)
	}
	render() {
		return (
				<button 
					id="btn" 
					className="btn btn-primary btn-large"
					style={{cursor: this.state.cursor}}
					onClick={this.dualOnClick}>Pump Quote!
				</button>
		)
	}
}