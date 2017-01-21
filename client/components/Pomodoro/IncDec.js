import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    margin: '0 auto',
    textAlign: 'center',
  },
  btn: {
    cursor: 'pointer',
    display: 'inline-block',
    width: '50px',
    height: '50px',
    margin: '0 auto',
    fontSize: '2em',
  },
  display: {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    textAlign: 'center',
  }
}

let IncDec = ({increment, decrement, type, value}) => {
  let btnType = type === 'primary' ? 'btn-primary' : 'btn-success'
  return (
    <div style={styles.container}>
      <button
        className={`btn ${btnType}`}
        onClick={increment}
        style={styles.btn}>+</button>
      <div style={styles.display}>{value}</div>
      <button
        className={`btn ${btnType}`}
        onClick={decrement}
        style={styles.btn}>-</button>
    </div>
  )
}

export default IncDec = Radium(IncDec)
