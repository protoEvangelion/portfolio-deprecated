import React from 'react'
import Radium from 'radium'

const styles = {
  text: {
    fontSize: '120%',
    fontFamily: 'Alfa Slab One',
    position: 'absolute',
    top: '33%',
    left: '35%',
    color: 'black',
  },
}

let Header = ({}) => {
  return(
    <h4 style={styles.text}>Simon&#174;</h4>
  )
}

// Start.propTypes = {
//   start: React.PropTypes.func.isRequired
// }

export default Header = Radium(Header)
