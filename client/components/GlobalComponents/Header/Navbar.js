import React from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

let NavigationBar = () => {
  const styles = {
    nav: {
      width: '100%',
      background: '#000428',
      background: 'linear-gradient(to left, #000428 , #004e92)',
      color: 'white',
      padding: '50px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    img: {
      marginLeft: '-5px'
    },
    linkContainer: {
      cursor: 'pointer',
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    h3: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '3em',
      fontFamily: 'Alfa Slab One',
    },
    h4: {
      color: 'white'
    },
    a: {
      display: 'block',
      padding: '6px 12px',
      textDecoration: 'none',
    },
  }
  const Play = (id) => {
    document.getElementById(id).play()
  }
  const Pause = (id) => {
    document.getElementById(id).pause()
  }
  return (
    <header>
      <nav style={styles.nav}>
        <div className="ih-item circle effect1">
          <a href="#">
          <div className="spinner"></div>
          <div className="img">
            <img
              src={require('./images/head.png')}
              style={styles.img}
              alt="head shot" />
          </div>
          <div className="info">
            <div className="info-back">
              <h3>Ryan Garant</h3>
              <h4 style={styles.h4}>Front End Dev</h4>
            </div>
          </div>
          </a>
        </div>
        <div
          style={styles.linkContainer}
          className="linkContainer"
          onMouseOver={(e) => Play('About')}
          onMouseOut={(e) => Pause('About')}
          >
            <video
              style={styles.video}
              id="About"
              height="130"
              >
                <source src={require('./videos/about.mp4')} type="video/mp4"/>
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
            <h3 style={styles.h3}>About</h3>
        </div>
        <div
          style={styles.linkContainer}
          className="linkContainer"
          onMouseOver={(e) => Play('Projects')}
          onMouseOut={(e) => Pause('Projects')}
          >
          <video
            style={styles.video}
            id="Projects"
            height="130"
            >
              <source src={require('./videos/projects.mp4')} type="video/mp4"/>
              Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <h3 style={styles.h3}>Projects</h3>
        </div>
        <div
          style={styles.linkContainer}
          className="linkContainer"
          onMouseOver={(e) => Play('Contact')}
          onMouseOut={(e) => Pause('Contact')}
          >
          <video
            style={styles.video}
            id="Contact"
            height="130"
            onMouseOver={(e) => Play('Contact')}
            onMouseOut={(e) => Pause('Contact')}
            >
              <source src={require('./videos/contact.mp4')} type="video/mp4"/>
              Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <h3 style={styles.h3}>Contact</h3>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar = Radium(NavigationBar)
