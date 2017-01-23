import React from 'react'
import Radium, {StyleRoot} from 'radium'
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
    fontSize: '30px',
    '@media (max-width: 995px)': {
      fontSize: '25px'
    },
    '@media (max-width: 830px)': {
      fontSize: '20px'
    },
    '@media (max-width: 650px)': {
      fontSize: '15px'
    },
    '@media (max-width: 450px)': {
      fontSize: '13px'
    }
  }
}

let Display = ({sessionTime, breakTime, seconds, initialized, type}) => {
  let display = initialized === 'yes'
    ? (
      <StyleRoot>
        <div style={styles.container}>
          <img src={require('./tomato.svg')}/>
          <h2 style={styles.text}>
            {type} <br/><br/>
            {type === 'session' ? sessionTime : breakTime} m {seconds} s
          </h2>
        </div>
      </StyleRoot>
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
