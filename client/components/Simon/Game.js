import React, {Component} from 'react'
import Radium from 'radium'
import Start from './Start'
import Strict from './Strict'
import Display from './Display'
import Header from './Header'

let green = '#149b18'
let red = '#911414'
let blue = '#141491'
let yellow = '#c3c91c'

let styles = {
  container: {
  	width: '250px',
  	height: '250px',
  	background: '#2f2f30',
  	borderRadius: '50%',
    margin: '0 auto',
    textAlign: 'center',
    paddingTop: '3px',
    position: 'relative',
  },
  colors: {
    width: '47%',
  	height: '47%',
    display: 'inline-block',
    cursor: 'pointer',
  },
  green: {
  	background: green,
  	borderTopLeftRadius: '100%',
    margin: '1% 1% 0% 1%',
    ':active': {
      background: '#0fd852'
    },
  },
  red:{
  	background: red,
  	borderTopRightRadius: '100%',
    margin: '1% 1% 0% 1%',
    ':active': {
      background: '#ef0b31'
    },
  },
  yellow: {
    background: yellow,
    borderBottomLeftRadius: '100%',
    margin: '0% 1% 1% 1%',
    ':active': {
      background: '#f7f704'
    },
  },
  blue: {
  	background: blue,
  	borderBottomRightRadius: '100%',
    margin: '0% 1% 1% 1%',
    ':active': {
      background: '#0011ff'
    },
  },
  center: {
    position: 'absolute',
    top: '25%',
    left: '25%',
  },
  border: {
  	width: '50%',
  	height: '50%',
  	background: '#2f2f30',
  	borderRadius: '50%',
  },
  cmd: {
  	width: '47%',
  	height: '47%',
  	background: '#f7f9fc',
  	borderRadius: '50%',
    margin: '3.8px 0 0 3.8px'
  }
}

class Game extends Component {
  toggleColor(delay, padColor) {
    switch(padColor) {
      case 'green':
        styles.green.background = '#0fd852'
        setTimeout(() => {this.click
          styles.green.background = green
          this.forceUpdate()
        }, delay)
        break
      case 'red':
        styles.red.background = '#ef0b31'
        setTimeout(() => {
          styles.red.background = red
          this.forceUpdate()
        }, delay)
        break
      case 'blue':
        styles.blue.background = '#0011ff'
        setTimeout(() => {
          styles.blue.background = blue
          this.forceUpdate()
        }, delay)
        break
      case 'yellow':
        styles.yellow.background = '#f7f704'
        setTimeout(() => {
          styles.yellow.background = yellow
          this.forceUpdate()
        }, delay)
        break
    }
  }
  componentWillReceiveProps(nextProps) {
    this.toggleColor(700, this.props.memorize)
  }
  render() {
    return(
      <div id="gameContainer" style={styles.container}>
        <div key="green"
          style={[styles.colors, styles.green]}
          onClick={() => this.props.click('green')}>
        </div>
        <div key="red"
          style={[styles.colors, styles.red]}
          onClick={() => this.props.click('red')}>
        </div>
        <div key="yellow"
          style={[styles.colors, styles.yellow]}
          onClick={() => this.props.click('yellow')}>
        </div>
        <div key="blue"
          style={[styles.colors, styles.blue]}
          onClick={() => this.props.click('blue')}>
        </div>
        <div key="border"
          style={[styles.center, styles.border]}>
        </div>
        <img style={[styles.center, styles.cmd]} src={require('./brushedMetal.jpg')} />
        <Header />
        <Start
          start={this.props.start}
          round={this.props.round}/>
        <Strict />
        <Display text={this.props.round}/>
      </div>
    )
  }

}

Game.propTypes = {
  click: React.PropTypes.func.isRequired,
  start: React.PropTypes.func.isRequired,
  round: React.PropTypes.number.isRequired,
  memorize: React.PropTypes.any
}

//specified any under memorize prop type because it
//needs to handle undefined without throwing an error

export default Game = Radium(Game)
