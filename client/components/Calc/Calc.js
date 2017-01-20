import React, {Component} from 'react'
import Radium from 'radium'
import Display from './Display'
import Button from './Button'

const styles = {
  backdrop: {
    background: '#e6e8ed',
    padding: '20px',
    width: '290px',
    height: '350px',
    margin: '20px auto',
    textAlign: 'center',
    borderRadius: '20px'
  }
}

class Calc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDisplay: '0',
      previous: 0,
      runningTotal: 0,
      operator: false
    }

    this.onNumClick = this.onNumClick.bind(this)
    this.onOperationClick = this.onOperationClick.bind(this)
  }
  onNumClick(value) {
    if(this.state.currentDisplay === '0' || this.state.operator === true) {
        this.setState({
          currentDisplay: `${value}`,
          operator: false
        })
    } else {
        this.setState({
          currentDisplay: `${this.state.currentDisplay}${value}`
        })
    }
  }
  onOperationClick(value) {
    let current = Number(this.state.currentDisplay)
    let previous= Number(this.state.previous)
    let runningTotal
    let total

    switch(value) {
      case 'AC':
        this.setState({
          currentDisplay: '0',
          previous: '0',
          operator: false,
          runningTotal: 0
        })
        break
      case 'CE':
        console.log('CE')
        break
      case '%':
        console.log('%')
        break
      case 'X':
        console.log('X')
        break
      case '÷':
        console.log('÷')
        break
      case '+':
        console.log('+')
        runningTotal = previous + this.state.runningTotal
        this.setState({
          currentDisplay: runningTotal.toString(),
          previous: current.toString(),
          runningTotal: runningTotal,
          operator: true,
        })
        break
      case '-':
        console.log('-')
        break
      case '=':
        console.log('=')
        break
    }
  }
  render() {
    return (
      <div style={styles.backdrop}>
        <Display currentDisplay={this.state.currentDisplay}/>
        <Button color="#d35252" content="AC"
          click={this.onOperationClick}/>
        <Button color="#d35252" content="CE"
          click={this.onOperationClick}/>
        <Button color="#4c4a4a" content="%"
          click={this.onOperationClick}/>
        <Button color="#4c4a4a" content="÷" height="40px"
          click={this.onOperationClick}/><br/>

        <Button color="#4c4a4a" content={7}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content={8}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content={9}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content="X" height="40px"
          click={this.onOperationClick}/><br/>

        <Button color="#4c4a4a" content={4}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content={5}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content={6}
          click={() => this.onNumClick}/>
        <Button color="#4c4a4a" content="-" height="40px"
          click={this.onOperationClick}/><br/>

        <Button color="#4c4a4a" content={1}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content={2}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content={3}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content="+" type="plus"
          click={this.onOperationClick}/>

        <Button color="#4c4a4a" content={0} type="bottom"
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content="." type="bottom"
          click={this.onOperationClick}/>
        <Button color="#4c4a4a" content="=" type="bottom"
          click={this.onOperationClick}/>
      </div>
    )
  }
}

export default Calc = Radium(Calc)
