import React from 'react'
import Radium from 'radium'

const styles = {
  base: {
    textAlign: 'center'
  },
  btn: {
    margin: '30px',
    padding: '15px',
    fontSize: '2em',
    ':hover': {
      cursor: 'pointer',
    }
  }
}

let Replay = () => {
  return (
    <div style={styles.base}>
      <button className="btn btn-primary" style={styles.btn} onClick={() => location.reload()}>Replay</button>
    </div>
  )
}

export default Replay = Radium(Replay)
