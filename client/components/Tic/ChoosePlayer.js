import React from 'react'
import Radium from 'radium'

const styles = {
  base: {
    textAlign: 'center'
  },
  btn: {
    margin: '30px',
    padding: '10px 20px',
    fontSize: '2em',
    ':hover': {
      cursor: 'pointer',
    }
  },
  header: {
    color: '#025aa5'
  }
}

let ChoosePlayer = (props) => {
  return (
    <div style={styles.base}>
      <h1 style={styles.header}>Choose your player:</h1>
      <button value="X" onClick={props.onClick} className="btn btn-success" style={styles.btn} key="x">X</button>
      <button value="O" onClick={props.onClick} className="btn btn-info" style={styles.btn} key="y">O</button>
    </div>
  )
}

export default ChoosePlayer = Radium(ChoosePlayer)
