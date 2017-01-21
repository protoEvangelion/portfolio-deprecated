import React from 'react'
import Radium from 'radium'

const styles = {
  cursor: 'pointer',
}

let Display = (props) => {
  return(
    <h4>{props.minutes} min {props.seconds} s</h4>
  )
}

// React.propTypes = {
//   minutes: Display.PropTypes.number,
//   seconds: Display.PropTypes.number,
// }

export default Display = Radium(Display)
