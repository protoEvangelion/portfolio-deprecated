import React from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

const styles = {
	link: {
		cursor: 'pointer',
	}
}

let NavigationBar = () => {
  const styles = {
		img: {
			width: '300px',
			margin: '-35px'
		},
		navCtn: {
			marginLeft: '-100px'
		}
  }

  return (
    <header>
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			 	<Link className="nav-link" to="/">
					<img
						style={styles.img}
						className="img img-responsive"
						src={require('./logo.png')}
						alt="Ryan's logo"/>
				</Link>
			  <div
					style={styles.navCtn}
					className="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul className="navbar-nav">
			      <li className="nav-item active" style={styles.link}>
							<Link className="nav-link" to="about">
								About
							</Link>
			      </li>
			      <li className="nav-item">
							<Link className="nav-link" to="projects">
								Projects
							</Link>
			      </li>
			      <li className="nav-item">
							<Link className="nav-link" to="contact">
								Contact
							</Link>
			      </li>
			    </ul>
			  </div>
			</nav>
    </header>
  )
}

export default NavigationBar = Radium(NavigationBar)
