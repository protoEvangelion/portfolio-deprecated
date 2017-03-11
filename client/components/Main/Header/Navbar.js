import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import { Collapse } from 'react-collapse'
import DropDown from './DropDown'

const styles = {
	navCtn: {
		display: 'flex',
		justifyContent: 'flex-start',
	},
	tab: {
		cursor: 'pointer',
		height: '100%',
		padding: '23px 20px 29px 20px',
		color: 'black',
		fontSize: '20px',
		listStyle: 'none',
		background: 'white',
		transition: 'background 1.5s ease',
		':hover': {
			transition: 'background 1.5s ease',
			background: '#B3FFAB',
			background: 'webkit-linear-gradient(to left, #B3FFAB , #12FFF7)',
			background: 'linear-gradient(to left, #B3FFAB , #12FFF7)',
		},
	},
	link: {
		textDecoration: 'none',
		userSelect: 'none',
		':hover': {
			textDecoration: 'none',
		}
	},
  img: {
    width: '50px',
		margin: '10px 20px 10px 15px',
  },
}

class NavigationBar extends Component {
constructor(props) {
	super(props)
	this.state = {
		open: false
	}
}
render() {
  return (
    <header>
			<nav style={styles.navCtn}>
				<Link to="/">
					<img
						style={styles.img}
						src={require('./logo.png')}
						alt="Ryan's logo"/>
				</Link>
				<Link style={styles.link} to="about">
					<div key="about" style={styles.tab}>
						About
					</div>
				</Link>
				<Link style={styles.link} to="projects">
					<div key="projects" style={styles.tab}>
						Projects
					</div>
				</Link>
				<Link style={styles.link} to="contact">
					<div key="contact" style={styles.tab}>
						Contact
					</div>
				</Link>
			</nav>
    </header>
    )
  }
}

export default NavigationBar = Radium(NavigationBar)
