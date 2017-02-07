import React, {Component} from 'react'
import Radium from 'radium'
import Start from './Start'
import Cell from './Cell'

const styles = {
  container: {
    margin: '60px auto',
    textAlign: 'center',
  },
}

class Board extends Component {
  constructor(props) {
    super(props)

    let matrix = Array(10).fill(false).map(() => Array(10).fill(false))

    this.state = {
      cells: matrix,
      viewportHeight: window.innerHeight * .80,
    }
  }
  start() {
    for(let i = 0; i < 20; i++) {
      setTimeout(this.storeNeighbors(), 1000)
    }
  }
  nextState(alive, cell) {
    if(cell === false && alive === 3) {
        // console.log(true)
        return true
    } else if(cell === true && alive < 2) {
        // console.log(false)
        return false
    } else if(cell === true && alive > 3) {
        // console.log(false)
        return false
    } else if(cell === true && alive >= 2) {
        // console.log(true)
        return true
    }
  }
  countNeighbors(neighbors, cell) {
    let alive = 0

    neighbors.forEach((neighbor) => {
      neighbor === true ? ++alive : ''
    })

    return this.nextState(alive, cell)

  }
  storeNeighbors() {
    let cells = this.state.cells
    let newCells = cells.map((matrix, row) => {
      return matrix.map((cell, column) => {
        //handle inner cells (non border)
        let neighbors
        if(row !== 0 && row !== 9 && column !== 0 && column !== 9) {
          neighbors = [
            cells[row-1][column-1],
            cells[row-1][column],
            cells[row-1][column+1],
            cells[row][column-1],
            cells[row][column+1],
            cells[row+1][column-1],
            cells[row+1][column],
            cells[row+1][column+1]
          ]

          return this.countNeighbors(neighbors, cell)
          // console.log(neighbors)
        } else if(row === 0 && column === 0) {
        // handle top left corner cell
          neighbors = [
            cells[row+9][column+9],
            cells[row+9][column],
            cells[row+9][column+1],
            cells[row][column+9],
            cells[row][column+1],
            cells[row+1][column+9],
            cells[row+1][column],
            cells[row+1][column+1]
          ]
          return this.countNeighbors(neighbors, cell)
          // console.log('neighbors')
        } else if(row === 0 && column === 9) {
        // handle top right corner cell
          neighbors = [
            cells[row+9][column-1],
            cells[row+9][column],
            cells[row+9][column-9],
            cells[row][column-1],
            cells[row][column-9],
            cells[row+1][column-1],
            cells[row+1][column],
            cells[row+1][column-9]
          ]
          return this.countNeighbors(neighbors, cell)
          // console.log(neighbors)
        } else if(row === 9 && column === 0) {
        // handle bottom left corner cell
          neighbors = [
            cells[row-1][column+9],
            cells[row-1][column],
            cells[row-1][column+1],
            cells[row][column+9],
            cells[row][column+1],
            cells[row-9][column+9],
            cells[row-9][column],
            cells[row-9][column+1]
          ]
          return this.countNeighbors(neighbors, cell)
          // console.log(neighbors)
        } else if(row === 9 && column === 9) {
        // handle bottom right corner cell
          neighbors = [
            cells[row-1][column-1],
            cells[row-1][column],
            cells[row-1][column-9],
            cells[row][column-1],
            cells[row][column-9],
            cells[row-9][column-1],
            cells[row-9][column],
            cells[row-9][column-9]
          ]
          return this.countNeighbors(neighbors, cell)
          // console.log(neighbors)
        } else if(row === 0) {
        // handle top row cells
          neighbors = [
            cells[row+9][column-1],
            cells[row+9][column],
            cells[row+9][column+1],
            cells[row][column-1],
            cells[row][column+1],
            cells[row+1][column-1],
            cells[row+1][column],
            cells[row+1][column+1]
          ]
          return this.countNeighbors(neighbors, cell)
          // console.log(neighbors)
        } else if(row === 9) {
        // handle bottom row cells
          neighbors = [
            cells[row-1][column-1],
            cells[row-1][column],
            cells[row-1][column+1],
            cells[row][column-1],
            cells[row][column+1],
            cells[row-9][column-1],
            cells[row-9][column],
            cells[row-9][column+1]
          ]
          return this.countNeighbors(neighbors, cell)
          // console.log(neighbors)
        } else if(column === 0) {
        // handle left column cells
          neighbors = [
            cells[row-1][column+9],
            cells[row-1][column],
            cells[row-1][column+1],
            cells[row][column+9],
            cells[row][column+1],
            cells[row+1][column+9],
            cells[row+1][column],
            cells[row+1][column+1]
          ]
          return this.countNeighbors(neighbors, cell)
          // console.log(neighbors)
        } else if(column === 9) {
        // handle right column cells
          neighbors = [
            cells[row-1][column-1],
            cells[row-1][column],
            cells[row-1][column-9],
            cells[row][column-1],
            cells[row][column-9],
            cells[row+1][column-1],
            cells[row+1][column],
            cells[row+1][column-9]
          ]
          return this.countNeighbors(neighbors, cell)
          // console.log(neighbors)
        }
      })
    })
    // console.log(newCells)
    this.setState({cells: newCells})
    this.forceUpdate()
  }
  cellClick(id) {
    const row = id.slice(0, id.indexOf(','))
    const column = id.slice(id.indexOf(',') + 1, id.length)

    const cells = this.state.cells
    cells[row][column] = !cells[row][column]

    this.setState({cells})
  }
  renderBoard(num) {
    let currentGen = this.state.cells
    return (
      <div>
        {currentGen.map((matrix, rowNumber) => {
          return matrix.map((arr, columnNumber) => {
            return <Cell
               key={`${rowNumber},${columnNumber}`}
               name={`${rowNumber},${columnNumber}`}
               value={arr}
               cellClick={this.cellClick.bind(this)}/>
          })
        })}
      </div>
    )
  }
  render() {
    return (
      <div style={styles.container}>
        <Start start={this.start.bind(this)}/>
        <div id="lifeContent">
          {this.renderBoard()}
        </div>
      </div>
    )
  }
}

export default Board = Radium(Board)
