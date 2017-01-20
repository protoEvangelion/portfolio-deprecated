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
    this.state = {currentDisplay: '0' }
    this.onNumClick = this.onNumClick.bind(this)
    this.onOperationClick = this.onOperationClick.bind(this)
  }
  onNumClick(value) {
    if(this.state.currentDisplay === '0') {
        this.setState({
          currentDisplay: `${value}`
        })
    } else {
        this.setState({
          currentDisplay: `${this.state.currentDisplay}${value}`
        })
    }
  }
  onOperationClick(value) {
    switch(value) {
      case 'AC':
        this.setState({currentDisplay: '0'})
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
