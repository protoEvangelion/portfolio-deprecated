import React, {Component} from 'react'
import Radium from 'radium'
import {Layer, Stage, Rect} from 'react-konva'
import Start from './Start'
import Pause from './Pause'
import Cell from './Cell'
import Count from './Count'
import Step from './Step'

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

    this.state = {
      cells: matrix,
      count: 0,
      canvasSize: canvasSize,
      boardSize: size,
      dimensions: dimensions,
      speed: 250,
      viewportHeight: window.innerHeight * .80,
    }
  }
  step() {
    const size = this.state.boardSize - 1
    this.storeNeighbors(size)
  }
  start() {
    let loopForever= () => {
      Interval = setInterval(startItUp, 100)
    }
    let startItUp = () => {
      this.storeNeighbors(this.state.boardSize - 1)
    }
    loopForever()
	}
  pause() {
    clearInterval(Interval)
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
  countNeighbors(neighbors, cell) {
    let alive = 0

    neighbors.forEach((neighbor) => {
      if(neighbor === true) ++alive
    })

    return this.nextState(alive, cell)

  }
  storeNeighbors(size) {
    let cells = this.state.cells
    let deadOrAlive

    let newCells = cells.map((matrix, row) => {
      return matrix.map((cell, col) => {
        //handle inner cells (non border)
        let neighbors
        if(row !== 0 && row !== size && col !== 0 && col !== size) {
          neighbors = [
            cells[row-1][col-1],
            cells[row-1][col],
            cells[row-1][col+1],
            cells[row][col-1],
            cells[row][col+1],
            cells[row+1][col-1],
            cells[row+1][col],
            cells[row+1][col+1]
          ]

          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)

        } else if(row === 0 && col === 0) {
        // handle top left corner cell
          neighbors = [
            cells[row+size][col+size],
            cells[row+size][col],
            cells[row+size][col+1],
            cells[row][col+size],
            cells[row][col+1],
            cells[row+1][col+size],
            cells[row+1][col],
            cells[row+1][col+1]
          ]
          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)
        } else if(row === 0 && col === size) {
        // handle top right corner cell
          neighbors = [
            cells[row+size][col-1],
            cells[row+size][col],
            cells[row+size][col-size],
            cells[row][col-1],
            cells[row][col-size],
            cells[row+1][col-1],
            cells[row+1][col],
            cells[row+1][col-size]
          ]
          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)
        } else if(row === size && col === 0) {
        // handle bottom left corner cell
          neighbors = [
            cells[row-1][col+size],
            cells[row-1][col],
            cells[row-1][col+1],
            cells[row][col+size],
            cells[row][col+1],
            cells[row-size][col+size],
            cells[row-size][col],
            cells[row-size][col+1]
          ]
          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)
        } else if(row === size && col === size) {
        // handle bottom right corner cell
          neighbors = [
            cells[row-1][col-1],
            cells[row-1][col],
            cells[row-1][col-size],
            cells[row][col-1],
            cells[row][col-size],
            cells[row-size][col-1],
            cells[row-size][col],
            cells[row-size][col-size]
          ]
          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)
        } else if(row === 0) {
        // handle top row cells
          neighbors = [
            cells[row+size][col-1],
            cells[row+size][col],
            cells[row+size][col+1],
            cells[row][col-1],
            cells[row][col+1],
            cells[row+1][col-1],
            cells[row+1][col],
            cells[row+1][col+1]
          ]
          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)
        } else if(row === size) {
        // handle bottom row cells
          neighbors = [
            cells[row-1][col-1],
            cells[row-1][col],
            cells[row-1][col+1],
            cells[row][col-1],
            cells[row][col+1],
            cells[row-size][col-1],
            cells[row-size][col],
            cells[row-size][col+1]
          ]
          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)
        } else if(col === 0) {
        // handle left col cells
          neighbors = [
            cells[row-1][col+size],
            cells[row-1][col],
            cells[row-1][col+1],
            cells[row][col+size],
            cells[row][col+1],
            cells[row+1][col+size],
            cells[row+1][col],
            cells[row+1][col+1]
          ]
          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)
        } else if(col === size) {
        // handle right col cells
          neighbors = [
            cells[row-1][col-1],
            cells[row-1][col],
            cells[row-1][col-size],
            cells[row][col-1],
            cells[row][col-size],
            cells[row+1][col-1],
            cells[row+1][col],
            cells[row+1][col-size]
          ]
          return this.drawCorrectBox(cell, this.countNeighbors(neighbors, cell), row, col)
        }
      })
    })

    this.setState({
      cells: newCells,
      count: this.state.count + 1
    })
    this.forceUpdate()
  }
  componentDidMount() {
    canvas = document.getElementById('lifeCanvas')
    ctx = canvas.getContext('2d')
    this.renderCanvas(this.state.dimensions)
  }
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
    ctx.fillStyle = 'rgba(225,228,233,255)'
    ctx.strokeStyle='rgb(0,0,0)'

    ctx.fillRect(x, y, d, d)
    ctx.strokeRect(x, y, d, d)
  }
  drawAliveBox(x, y) {
    const d = this.state.dimensions

    ctx.fillStyle = 'rgba(2,117,216,255)'
    ctx.fillRect(x, y, d, d)
  }
  renderCanvas(d) {

    let newCanvas = this.state.cells.map((cells, x) => {
      return cells.map((cell, y) => {
          cell === true
            ? this.drawAliveBox(y * d, x * d)
            : this.drawDeadBox(y * d, x * d)
          return cell
      })
    })

  }
  canvasClick(e) {
    //get coords of click
    const d = this.state.dimensions

    const x = Math.floor(e.nativeEvent.offsetX / d) * d
    const y = Math.floor(e.nativeEvent.offsetY / d) * d

    const color = ctx.getImageData(x, y, 1, 1).data
    const rgba = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`

    rgba === 'rgba(2,117,216,255)'
      ? this.drawDeadBox(x, y)
      : this.drawAliveBox(x, y)

    //NOTE calculate row and col
      // const cells = this.state.cells
      // cells[row][col] = !cells[row][col]
      //
      // this.setState({cells})

  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Step step={this.step.bind(this)}/>
          <Start start={this.start.bind(this)}/>
          <Pause pause={this.pause.bind(this)}/>
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
      </div>
    )
  }
}

export default Board = Radium(Board)
