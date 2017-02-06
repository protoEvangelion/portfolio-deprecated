import React, {Component} from 'react'
import Radium from 'radium'

const styles = {
  container: {
    padding: '5px',
  }
}

class GameOfLife extends Component {
  render() {
    return (
      <div style={styles.container}>
        Hello
      </div>
    )
  }
}

export default GameOfLife = Radium(GameOfLife)
