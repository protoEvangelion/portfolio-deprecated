import React from 'react'
import { Link } from 'react-router'

const NavigationBar = () => {
  const Play = (id) => {
    document.getElementById(id).play()
  }
  const Pause = (id) => {
    document.getElementById(id).pause()
  }
  return (
    <header>
      <nav>
        <img src={require('./images/head.png')} alt="headshot"/>
        <div className="linkContainer">
          <div className="linkItem">
            <h3>About</h3>
          </div>
          <div className="linkItem">
            <video
              id="About"
              height="100"
              height="200"
              onMouseOver={(e) => Play('About')}
              onMouseOut={(e) => Pause('About')}>
                <source src={require('./videos/projects.mp4')} type="video/mp4"/>
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
          </div>
        </div>
        <div>
          <h3>Projects</h3>
        </div>
        <div>
          <h3>Contact</h3>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar
