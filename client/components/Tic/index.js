import React, { Component } from 'react'
import Radium from 'radium'
import Board from './Board'

const styles = {
  margin: '30px',
  padding: '30px'
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Board />
      </div>
    )
  }
}

export default App = Radium(App)
