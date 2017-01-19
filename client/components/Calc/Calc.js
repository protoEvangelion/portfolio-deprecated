import React, {Component} from 'react'
import Radium from 'radium'
import Display from './Display'

const styles = {
  backdrop: {
    background: '#e6e8ed',
    padding: '20px'
  }
}

class Calc extends Component {
  constructor(props) {
    super(props)
    this.state = {currentDisplay: 0 }
  }
  render() {
    return (
      <div style={styles.backdrop}>
        <Display currentDisplay={this.state.currentDisplay}/>
        <p>what?</p>
      </div>
    )
  }
}

export default Calc = Radium(Calc)
