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
      runningTotal: 0,
      operator: false,
      lastOp: ''
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
    let total = (lastOp) => {
      switch(lastOp) {
        case 'X':
          return current * this.state.runningTotal
          break
        case '÷':
          return this.state.runningTotal / current
          break
        case '+':
          return current + this.state.runningTotal
          break
        case '-':
          return this.state.runningTotal - current
          break
        default:
          return current
          break
      }
    }

    let temp = total(this.state.lastOp)
    let set = (opType) => {
      this.setState({
        currentDisplay: temp.toString(),
        runningTotal: temp,
        operator: true,
        lastOp: opType,
      })
    }

    switch(value) {
      case 'AC':
        this.setState({
          currentDisplay: '0',
          operator: false,
          runningTotal: 0
        })
        break
      case '⇐':
        let val = this.state.currentDisplay.length === 1 ? '0' : this.state.currentDisplay.substring(0,this.state.currentDisplay.length-1)
        this.setState({
          currentDisplay: val
        })
        break
      case '%':
        let twoRight = this.state.currentDisplay
          .slice(this.state.currentDisplay.length - 2)

        let left = this.state.currentDisplay
          .slice(0, this.state.currentDisplay.length - 2)

        let percent = this.state.currentDisplay.length >= 2
          ? `${left}.${twoRight}`
          : `.0${this.state.currentDisplay}`
        console.log(1+Number(percent))
        let percentTotal = this.state.runningTotal * (1 + Number(percent))

        this.setState({
          currentDisplay: percentTotal.toString(),
          runningTotal: percentTotal,
          operator: false,
          lastOp: '',
        })
        break
      case 'X':
        set('X')
        break
      case '÷':
        set('÷')
        break
      case '+':
        set('+')
        break
      case '-':
        set('-')
        break
      case '=':
        set('')
        break
    }
  }
  render() {
    return (
      <div style={styles.backdrop}>
        <Display currentDisplay={this.state.currentDisplay}/>
        <Button color="#d35252" content="AC"
          click={this.onOperationClick}/>
        <Button color="#d35252" content="⇐" size="big"
          click={this.onOperationClick}/>
        <Button color="#4c4a4a" content="%"
          click={this.onOperationClick}/>
        <Button color="#4c4a4a" content="÷" height="40px"
          click={this.onOperationClick} size="big"/><br/>

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
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content="-" height="40px"
          click={this.onOperationClick} size="big"/><br/>

        <Button color="#4c4a4a" content={1}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content={2}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content={3}
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content="+" type="plus"
          click={this.onOperationClick} size="big"/>

        <Button color="#4c4a4a" content={0} type="bottom"
          click={this.onNumClick}/>
        <Button color="#4c4a4a" content="." type="bottom"
          click={this.onOperationClick} size="big"/>
        <Button color="#4c4a4a" content="=" type="bottom"
          click={this.onOperationClick} size="big"/>
      </div>
    )
  }
}

export default Calc = Radium(Calc)
