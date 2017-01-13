import React, { Component } from 'react'
import Radium from 'radium'
import Square from './Square'
import Player from './Player'
import ChoosePlayer from './ChoosePlayer'

const styles = {
  container: {
    textAlign: 'center'
  }
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: ''
    }
    this.onPlayerClick = this.onPlayerClick.bind(this)
  }
  handleClick(i) {
    const squares = this.state.squares.slice()
    let currentPlayer = this.state.currentPlayer
    squares[i] = currentPlayer
    this.setState({
      squares: squares,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X'
    })
  }
  onPlayerClick(e) {
    let value = e.target.value
    if(value === 'X') {
        this.setState({
          currentPlayer: 'X',
          humanPlayer: 'X',
          AIPlayer: 'O'
        })
    } else {
        this.setState({
          currentPlayer: 'O',
          humanPlayer: 'O',
          AIPlayer: 'X'
        })
    }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
  }
  render() {
    return (
      <div>
        <ChoosePlayer onClick={this.onPlayerClick}/>
        <Player
          currentPlayer={this.state.currentPlayer}
          humanPlayer={this.state.humanPlayer}
          AIPlayer={this.state.AIPlayer}/>
        <div style={styles.container}>
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div style={styles.container}>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div style={styles.container}>
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}

export default Board = Radium(Board)
