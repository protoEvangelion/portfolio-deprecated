import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    margin: '20px auto',
    textAlign: 'center'
  },
  btn: {
    cursor: 'pointer',
  }
}

let Start = ({startTimer}) => {
  return(
    <div style={styles.container}>
      <button
        className="btn btn-primary"
        onClick={startTimer}
        style={styles.btn}>Start</button>
    </div>
  )
}

export default Start = Radium(Start)
