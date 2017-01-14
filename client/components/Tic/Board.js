import React, { Component } from 'react'
import Radium from 'radium'
import Square from './Square'
import Player from './Player'
import ChoosePlayer from './ChoosePlayer'
import Replay from './Replay'

const styles = {
  container: {
    textAlign: 'center'
  },
  shiftUp: {
    marginTop: '-200px'
  }
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: '',
      humanPlayer: '',
      AIPlayer: '',
      showPlayerChoice: true
    }
    this.onPlayerClick = this.onPlayerClick.bind(this)
  }
  componentDidUpdate() {
    this.calculateWinner(this.state.squares)
  }
  AIMove(spaceTaken, humanPlayer, AIPlayer) {
    const squares = this.state.squares.slice()
    if(spaceTaken === 0 || spaceTaken === 2 || spaceTaken === 6 || spaceTaken === 8) {
      console.log('corner taken')
    } else if(spaceTaken === 4) {
        console.log('middle taken')
    } else {
        console.log('edge taken')
    }
  }
  handleClick(i) {
    const squares = this.state.squares.slice()
    if(squares[i] === null) {
      let currentPlayer = this.state.currentPlayer
      squares[i] = currentPlayer
      this.setState({
        squares: squares,
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X'
      })
      this.AIMove(i,this.state.humanPlayer, this.state.AIPlayer)
    } else {
        alert('Please choose a different space :)')
    }

  }
  calculateWinner(taken) {
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    wins.forEach((arr) => {
      if(taken[arr[0]]==='X' && taken[arr[1]]==='X' && taken[arr[2]]==='X') {
          console.log('x won')
      } else if(taken[arr[0]]==='O' && taken[arr[1]]==='O' && taken[arr[2]]==='O') {
          console.log('o won')
      }
    })
  }
  onPlayerClick(e) {
    let value = e.target.value
    if(value === 'X') {
        this.setState({
          currentPlayer: 'X',
          humanPlayer: 'X',
          AIPlayer: 'O',
          showPlayerChoice: false
        })
    } else {
        this.setState({
          currentPlayer: 'O',
          humanPlayer: 'O',
          AIPlayer: 'X',
          showPlayerChoice: false
        })
    }
  }
  renderChoosePlayer() {
    const PlayerChoice = this.state.showPlayerChoice === true
      ? <ChoosePlayer animate="animated fadeInLeft" onClick={this.onPlayerClick}/>
      : <ChoosePlayer animate="animated rollOut" />
    return PlayerChoice
  }
  renderCurrent() {
    const current = this.state.showPlayerChoice === false
      ?  <Player animate="animated rubberBand" currentPlayer={this.state.currentPlayer} humanPlayer={this.state.humanPlayer} AIPlayer={this.state.AIPlayer}/>
      : ''
    return current
  }
  renderSquare(i) {
    const square = this.state.showPlayerChoice === false
      ? <Square animate="animated rollIn" value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
      : ''
    return square
  }
  renderReplay() {
    const replay = this.state.showPlayerChoice === false
      ? <Replay animate="animated fadeIn" />
      : ''
    return replay
  }
  render() {
    return (
      <div>
        <div>
          {this.renderChoosePlayer()}
        </div>
        <div style={styles.shiftUp}>
          {this.renderCurrent()}
          <div style={styles.container}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div style={styles.container}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div style={styles.container}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        {this.renderReplay()}
      </div>
    )
  }
}

export default Board = Radium(Board)
