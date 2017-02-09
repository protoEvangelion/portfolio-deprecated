import React from 'react'
import Radium from 'radium'
import Board from './Board'

import './style.css'

const styles = {
  container: {
    margin: '0 auto 200px auto',
    textAlign: 'center',
    padding: '5px',
  }
}

let GameOfLife = () => {
  return (
    <div style={styles.container}>
      <Board />
    </div>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default GameOfLife = Radium(GameOfLife)
