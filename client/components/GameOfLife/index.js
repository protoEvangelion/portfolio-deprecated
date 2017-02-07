import React, {Component} from 'react'
import Radium from 'radium'
import Cell from './Cell'

import './style.css'

const styles = {
  border: {
    border: '3px solid black',
    display: 'inline-block',
  },
  row: {
    lineHeight: '0'
  },
}

export default class GameOfLife extends Component {
  constructor(props) {
    super(props)
    //NOTE give credit to Richard http://codepen.io/strawstack/pen/bedYyv?editors=0010
    let arr = []
    for(let i = 0; i<100; i++) {
      arr.push(<Cell key={i} id={i} cells={arr} />)
    }

    this.state = {
      squares: arr,
      nextGen: [],
      viewportHeight: window.innerHeight * .80,
    }
  }
  componentWillMount() {

  }
  renderBoard(num) {
    let currentGen = this.state.currentGen
    return (
      <div style={styles.border}>
        {currentGen.map((arr, i) => {
          return (
            arr.map((square, index) => {
              return (
                <Cell
                  key={`row${i}column${index}`}
                  >
                </Cell>
              )
            })
          )
        })}
      </div>
    )
  }
  render() {
    return (
      <div id="lifeContainer">
        <div id="lifeContent">
          {this.state.squares}
        </div>
        <p>Inspired by Richard Hayes</p>
      </div>
    )
  }
}
