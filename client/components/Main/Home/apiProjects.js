import { Link } from 'react-router'
import React from 'react'
import Radium, { StyleRoot } from 'radium'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '40px 0 200px 0',
    '@media (max-width: 758px)': {
      flexDirection: 'column',
    }
  },
  textCtn: {
    marginTop: '20px',
    maxWidth: '50%',
    textAlign: 'center',
  },
  header: {
    fontFamily: '"Coda", cursive',
    fontSize: '1.7em',
  }
}

let APIProjects = () => {
  return (
    <StyleRoot>
      <section id="apiProjects">
        <div style={styles.container}>
          <div className="ih-item square effect4">
            <Link to="weather">
              <div className="img"><img src={require('../Projects/images/weather.png')} alt="img"/></div>
              <div className="mask1"></div>
              <div className="mask2"></div>
              <div className="info">
                <h3>Cool weather API forecaster</h3>
                <p>Geolocation forecasts!</p>
              </div>
            </Link>
          </div>
          <div style={styles.textCtn}>
            <h5 style={styles.header}>A fun collection of API projects that span from building a Pinterest recipe box to viewing the coolest channels on Twitch...</h5><br/>
            <Link to="apiProjects">
              <p>View my API Projects</p>
            </Link>
          </div>
        </div>
      </section>
    </StyleRoot>
  )
}

export default APIProjects
