import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    padding: '5px',
  }
}

let Credit = () => {
  return (
    <p>Core logic inspired by <a href="http://codepen.io/strawstack/pen/bedYyv">Richard Hayes work</a></p>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default Credit = Radium(Credit)
