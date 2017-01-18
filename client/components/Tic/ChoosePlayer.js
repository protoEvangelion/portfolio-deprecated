import React from 'react'
import Radium from 'radium'

const styles = {
  base: {
    textAlign: 'center',
  },
  btn: {
    margin: '30px',
    padding: '10px 20px',
    fontSize: '1em',
    ':hover': {
      cursor: 'pointer',
    }
  },
  header: {
    color: '#025aa5',
    padding: 0,
    margin: 0,
    fontSize: '1.5em'
  }
}

let ChoosePlayer = (props) => {
  return (
    <div style={styles.base} className={props.animate}>
      <h1 style={styles.header}>Choose your</h1><br/>
      <h1 style={styles.header}>Tic-Tac-Toe player:</h1>
      <button value="X" onClick={props.onClick} className="btn btn-success" style={styles.btn} key="x">X</button>
      <button value="O" onClick={props.onClick} className="btn btn-info" style={styles.btn} key="y">O</button>
    </div>
  )
}

export default ChoosePlayer = Radium(ChoosePlayer)
