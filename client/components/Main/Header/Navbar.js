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

  }
  const Play = (id) => {
    document.getElementById(id).play()
  }
  const Pause = (id) => {
    document.getElementById(id).pause()
  }
  return (
    <header>
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <a className="navbar-brand" href="#">Navbar</a>
			  <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
			      {/* <li className="nav-item dropdown">
			        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Dropdown link
			        </a>
			        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			          <a className="dropdown-item" href="#">Front End</a>
			          <a className="dropdown-item" href="#">Data Visualizations action</a>
			          <a className="dropdown-item" href="#">Full Stack</a>
			        </div>
			      </li> */}
			    </ul>
			  </div>
			</nav>
    </header>
  )
}

export default NavigationBar = Radium(NavigationBar)
