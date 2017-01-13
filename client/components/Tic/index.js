import React, { Component } from 'react'
import ChoosePlayer from './ChoosePlayer'
import Replay from './Replay'
import Radium from 'radium'
import Board from './Board'
import Player from './Player'

const styles = {
  margin: '30px',
  padding: '30px'
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Board />
        <Replay />
      </div>
    )
  }
}

export default App = Radium(App)
