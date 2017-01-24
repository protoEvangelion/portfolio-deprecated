import React, {Component} from 'react'
import Radium from 'radium'
import Game from './Game'

const styles = {
  container: {
  	width: '250px',
  },
}

class Simon extends Component {
  constructor(props){
    super(props)
    this.state = {
      round: 0,
      
    }
    this.padClick = this.padClick.bind(this)
  }
  padClick(color) {
    console.log(Math.floor(Math.random() * 4) + 0)
  }
  render() {
    return(
      <div id="gameContainer">
        <Game
          click={this.padClick}/>
      </div>
    )
  }
}

export default Simon = Radium(Simon)
