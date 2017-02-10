import React, {Component} from 'react'
import Radium from 'radium'
import nextGeneration from './nextGen_helper'
import patternHelper from './pattern_helper'
import Patterns from './Patterns'
import Start from './Start'
import Pause from './Pause'
import Reset from './Reset'
import Step from './Step'

import Count from './Count'


const styles = {
  container: {
    margin: '60px auto',
    textAlign: 'center',
  },
  header: {
    marginBottom: '10px',
  },
  canvas: {
    cursor: 'pointer',
    border: '1px solid black'
  }
}
//Global variables
let Interval, canvas, ctx

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = this.initialState()

  }
  initialState() {
    const size = 50
    const coords = 8
    const dimensions = coords
    const canvasSize = size*coords.toString() + 'px'

    let matrix = Array(size).fill(false).map(() => Array(size).fill(false))

    matrix[0][0] = true
    matrix[0][1] = true
    matrix[0][2] = true
    matrix[1][0] = true
    matrix[2][1] = true

    return {
      cells: matrix,
      count: 0,
      running: false,
      canvasSize: canvasSize,
      boardSize: size,
      dimensions: dimensions,
      viewportHeight: window.innerHeight * .80,
      expanded: false,
      choosingPattern: false,
      patternType: '',
    }
  }
  componentDidMount() {
    canvas = document.getElementById('lifeCanvas')
    ctx = canvas.getContext('2d')
    this.renderCanvas(this.state.dimensions, this.state.cells)
  }

  //next three functions handle the computation of nextGen
  storeNeighbors(size) {
    let cells = this.state.cells
    nextGeneration(this, cells, size)
  }
  countNeighbors(neighbors, cell) {
    let alive = 0
    neighbors.forEach((neighbor) => {
      if(neighbor === true) ++alive
    })
    return this.nextState(alive, cell)
  }
  nextState(alive, cell) {
    if(cell === false && alive === 3) {
        return true
    } else if(cell === true && alive < 2) {
        return false
    } else if(cell === true && alive > 3) {
        return false
    } else if(cell === true && alive >= 2) {
        return true
    } else {
        return false
    }
  }

  // next 5 functions handle rendering to the canvas element
  drawCorrectBox(cell, deadOrAlive, row, col) {
    const d = this.state.dimensions
    if(cell !== deadOrAlive) {
      cell === true ?
        this.drawDeadBox(col * d, row * d) :
        this.drawAliveBox(col * d, row * d)
    }
    return deadOrAlive
  }
  drawDeadBox(x, y) {
    const d = this.state.dimensions

    ctx.lineWidth = .2
    ctx.fillStyle = 'rgb(225,228,233)'
    ctx.strokeStyle='rgb(0,0,0)'

    ctx.fillRect(x, y, d, d)
    ctx.strokeRect(x, y, d, d)
  }
  drawAliveBox(x, y) {
    const d = this.state.dimensions
    ctx.fillStyle = 'rgb(2,117,216)'
    ctx.fillRect(x, y, d, d)
  }
  canvasClick(e) {
    //get coords of click
    const d = this.state.dimensions

    const x = Math.floor(e.nativeEvent.offsetX / d) * d
    const y = Math.floor(e.nativeEvent.offsetY / d) * d
    const cells = this.state.cells
    const row = y / d
    const col = x / d

    if(this.state.choosingPattern === false) {
      const color = ctx.getImageData(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 1, 1).data
      const rgb = `rgb(${color[0]},${color[1]},${color[2]})`

      rgb === 'rgb(2,117,216)'
        ? this.drawDeadBox(x, y)
        : this.drawAliveBox(x, y)

      cells[row][col] = !cells[row][col]
      this.setState({cells})

    } else {
        let newPattern = patternHelper(this, cells, x, y, d, this.state.patternType)

        this.setState({
          choosingPattern: false,
          cells: newPattern
        })
    }

  }
  expandPatterns() {
    this.setState({expanded: !this.state.expanded})
  }
  placePattern(type) {
    this.setState({
      choosingPattern: true,
      patternType: type
    })
  }
  renderCanvas(d, cells) {
    cells.map((cells, x) => {
      return cells.map((cell, y) => {
          let coords = cell === true
            ? this.drawAliveBox(y * d, x * d)
            : this.drawDeadBox(y * d, x * d)
          return
      })
    })
  }

  // next 3 functions handle startUP, pausing, and stepping
  start() {
    if(!this.state.running) {
      let loopForever= () => {
        Interval = setInterval(startItUp, 100)
      }
      let startItUp = () => {
        this.storeNeighbors(this.state.boardSize - 1)
      }
      loopForever()
      this.setState({running: true})
    }
	}
  pause() {
    clearInterval(Interval)
    this.setState({running: false})
  }
  reset() {
    clearInterval(Interval)
    let initialState = this.initialState()
    this.renderCanvas(initialState.dimensions, initialState.cells)

    this.setState(initialState)
  }
  step() {
    const size = this.state.boardSize - 1
    this.storeNeighbors(size)
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Step step={this.step.bind(this)}/>
          <Start start={this.start.bind(this)} running={this.state.running}/>
          <Pause pause={this.pause.bind(this)}/>
          <Reset reset={this.reset.bind(this)}/>
          <Count count={this.state.count} />
        </div>
        <div style={{display: 'inline-block'}}>
          <canvas
            id="lifeCanvas"
            width={this.state.canvasSize}
            height={this.state.canvasSize}
            style={styles.canvas}
            onClick={(e) => this.canvasClick(e)} >
          </canvas>
        </div>
        <div style={styles.footer}>
          <Patterns
            expandPatterns={this.expandPatterns.bind(this)}
            expanded={this.state.expanded}
            placePattern={this.placePattern.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Board = Radium(Board)
