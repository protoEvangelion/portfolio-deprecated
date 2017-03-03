import React from 'react'
import Radium from 'radium'
import SocialBtns from './SocialBtns'

const styles = {
  container: {
		width: '100%',
		background: '#000428',
		background: 'linear-gradient(to left, #000428 , #004e92)',
		color: 'white',
		padding: '50px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
  },
	img: {
		marginLeft: '-5px'
	},
	h5: {
		color: 'white'
	}
}

let Banner = () => {
  return (
    <div style={styles.container}>
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
