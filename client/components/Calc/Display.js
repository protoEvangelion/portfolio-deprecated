import React from 'react'
import Radium from 'radium'

const styles = {
  width: '300px',
  height: '100px',
  background: '#afada1',
  font: 'black'
}

let Display = (props) => {
  return (
    <div style={styles}>
      {props.currentDisplay}
    </div>
  )
}

Display.propTypes = {
  currentDisplay: React.PropTypes.number
}

export default Display = Radium(Display)
