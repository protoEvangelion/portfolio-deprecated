import React from 'react'
import Radium from 'radium'

const styles = {
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
  	background: '#15db75',
  	borderTopLeftRadius: '100%',
    margin: '1% 1% 0% 1%',
  },
  red:{
  	background: '#c10909',
  	borderTopRightRadius: '100%',
    margin: '1% 1% 0% 1%',
  },
  yellow: {
    background: '#efe33b',
    borderBottomLeftRadius: '100%',
    margin: '0% 1% 1% 1%',
  },
  blue: {
  	background: '#0d0dc6',
  	borderBottomRightRadius: '100%',
    margin: '0% 1% 1% 1%',
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

let Game = ({click}) => {
  return(
    <div id="gameContainer" style={styles.container}>
      <div id="green"
        style={[styles.colors, styles.green]}
        onClick={() => click('green')}>
      </div>
      <div id="red"
        style={[styles.colors, styles.red]}
        onClick={() => click('red')}>
      </div>
      <div id="yellow"
        style={[styles.colors, styles.yellow]}
        onClick={() => click('yellow')}>
      </div>
      <div id="blue"
        style={[styles.colors, styles.blue]}
        onClick={() => click('blue')}>
      </div>
      <div id="border"
        style={[styles.center, styles.border]}>
      </div>
      <img style={[styles.center, styles.cmd]} src={require('./brushedMetal.jpg')} />
    </div>
  )
}

Game.propTypes = {
  click: React.PropTypes.func.isRequired,

}

export default Game = Radium(Game)
