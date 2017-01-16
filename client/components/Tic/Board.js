import React, { Component } from 'react'
import Radium from 'radium'
import Square from './Square'
import Player from './Player'
import ChoosePlayer from './ChoosePlayer'
import Replay from './Replay'
import { block, blockFork, win, takeEdge } from './aiFunctions'

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
      showPlayerChoice: true,
      moveCount: 0,
      gameType: ''
    }
    this.onPlayerClick = this.onPlayerClick.bind(this)
  }
  componentDidUpdate() {
    this.calculateWinner(this.state.squares)
  }
  handleClick(i) {
    const squares = this.state.squares.slice()
    if(squares[i] === null) {
      setTimeout(this.AIMove(i, this.state.humanPlayer, this.state.AIPlayer), 3000)
    } else {
        alert('Please choose a different space :)')
    }
  }
  AIMove(spaceTaken, humanPlayer, AIPlayer) {
    let squares = this.state.squares.slice()
    let count = this.state.moveCount

    //first 3 ifs initialize the gametype
    if(count === 0 && (spaceTaken === 0 || spaceTaken === 2 || spaceTaken === 6 || spaceTaken === 8)) {
        console.log('corner taken')
        squares[spaceTaken] = humanPlayer
        squares[4] = AIPlayer
        this.setState({
          squares: squares,
          currentPlayer: humanPlayer,
          moveCount: count + 1,
          gameType: 'cornerFirst'
        })

    } else if(spaceTaken === 4) {
        console.log('middle taken')
    } else {
        console.log('edge taken')
    }

    //handle games where human takes corner spot first
    if(this.state.gameType == 'cornerFirst') {
      squares[spaceTaken] = humanPlayer

      if(typeof win(squares, humanPlayer, AIPlayer) === 'number') {
          squares[win(squares, humanPlayer, AIPlayer)] = AIPlayer
          this.setState({
            squares: squares,
            moveCount: count + 1
          })
          return
      } else if(typeof block(squares, humanPlayer, AIPlayer) === 'number') {
          squares[block(squares, humanPlayer, AIPlayer)] = AIPlayer
          this.setState({
            squares: squares,
            moveCount: count + 1
          })
          return
      } else if(typeof takeEdge(squares, humanPlayer) === 'number') {
          squares[takeEdge(squares, humanPlayer)] = AIPlayer
          this.setState({
            squares: squares,
            moveCount: count + 1
          })
          return
      } else {
         squares[blockFork(squares, humanPlayer)] = AIPlayer
         this.setState({
           squares: squares,
           moveCount: count + 1
         })
         return
      }

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
