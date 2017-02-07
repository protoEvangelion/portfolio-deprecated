import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    margin: '20px auto',
    textAlign: 'center',
  },
  button: {
    cursor: 'pointer',
  }
}

let Start = ({start}) => {
  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={start}>Start
      </button>
    </div>
  )
}

Start.propTypes = {
  start: React.PropTypes.func.isRequired,
}

export default Start = Radium(Start)
