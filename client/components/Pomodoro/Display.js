import React from 'react'
import Radium from 'radium'
const tomato = require('file-loader!./tomato.svg')

const styles = {
  container: {
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    width: '40%'
  },
  text: {
    position: 'absolute',
    width: '100%',
    top: '35%',
    fontFamily: '"Rock Salt", cursive',
    color: 'white',
  }
}

let Display = ({sessionTime, breakTime, seconds, initialized, type}) => {
  let display = initialized === 'yes'
    ? (
      <div style={styles.container}>
        <img src={require('./tomato.svg')}/>
        <h2 style={styles.text}>
          {type} <br/><br/>
          {type === 'session' ? sessionTime : breakTime} m {seconds} s
        </h2>
      </div>
    )
    : <div></div>
  return (
    <div>
      {display}
    </div>
  )
}

Display.propTypes = {
  sessionTime: React.PropTypes.number,
  breakTime: React.PropTypes.number,
  seconds: React.PropTypes.number,
  type: React.PropTypes.string,
  initialized: React.PropTypes.string
}

export default Display = Radium(Display)
