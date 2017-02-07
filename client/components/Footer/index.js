import React from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

const styles = {
  container: {
    backgroundColor: '#5A5E69',
    marginTop: '20px',
    padding: '20px 0 30px 0',
    textAlign: 'center',
    width: '100%',
  },
  text: {
    display: 'inline',
    color: 'white',
  }
}

let Footer = () => {
  return (
    <footer className="container-fluid" style={styles.container}>
      <div className="row">
        <div className="col-md-4">
          <p style={styles.text}>Lovingly crafted by Ryan Garant</p>
        </div>
        <div className="col-md-4">
          <Link to="/privacy-policy"><p style={styles.text}>Privacy Policy</p></Link>
        </div>
        <div className="col-md-4">
          <p style={styles.text}>Copyright © 2017</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer = Radium(Footer)
