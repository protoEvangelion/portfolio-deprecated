import React, { Component } from 'react'
import Radium from 'radium'
import SocialBtns from './SocialBtns'
import Particles from 'react-particles-js'
import config from './particlesjs-config.json'

const styles = {
  container: {
		width: '100%',
		background: '#000428',
		background: 'linear-gradient(to left, #000428 , #004e92)',
		color: 'white',
		padding: '50px',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
  },
	img: {
		marginLeft: '-5px'
	},
	h5: {
		color: 'white'
	},
	particles: {
		position: 'absolute',
		top: 0,
		left: 0,
	}
}

let Banner = () => {
	return (
		<div  style={styles.container}>
			<Particles
				width={'100%'}
				params={config}
				style={styles.particles}/>
			<div className="ih-item circle effect1">
				<a href="#">
				<div className="spinner"></div>
				<div className="img">
					<img
						src={require('./head.png')}
						style={styles.img}
						alt="head shot" />
				</div>
				<div className="info">
					<div className="info-back">
						<h3>Ryan Garant</h3>
						<h5 style={styles.h5}>Full Stack Web Dev</h5>
					</div>
				</div>
				</a>
			</div>
			<SocialBtns />
		</div>
	)
}

export default Banner = Radium(Banner)
