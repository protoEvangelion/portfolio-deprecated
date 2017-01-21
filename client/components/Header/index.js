import React from 'react'
import { Link } from 'react-router'
import styled, { keyframes } from 'styled-components'

const Item = styled.div`
	margin: 20px 20px;
	background: url(${props => props.src}) no-repeat center;
	background-size: 100% auto;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	cursor: default;
	transition: all 1s ease-in-out;
	display: inline-block;
	text-align: left;

	&:hover {
		box-shadow:
			inset 0 0 0 110px rgba(200,95,66, 0.4),
			inset 0 0 0 16px rgba(255,255,255,0.8),
			0 1px 2px rgba(0,0,0,0.1);
	  cursor: pointer;
	}
`

const Header = () => (
	<div style={{textAlign: 'center'}}>
		<Link to="/wikiViewer">
			<Item src={require('./Wiki.png')} />
		</Link>
		<Link to="/weather">
			<Item src={require('./weather.png')} />
		</Link>
		<Link to="/calc">
			<Item src={require('./calc.png')} />
		</Link>
		<Link to="/quotepump">
			<Item src={require('./quotePump.png')} />
		</Link>
		<Link to="/twitch">
			<Item src={require('./twitch.png')} />
		</Link>
		<Link to="/tictactoe">
			<Item src={require('./tic.png')} />
		</Link>
		<Link to="/pomodoro">
			<Item src={require('./pomodoro.png')} />
		</Link>
	</div>
)

export default Header
