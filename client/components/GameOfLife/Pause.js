import React from 'react'
import Radium from 'radium'

const styles = {
  button: {
    marginRight: '20px',
    cursor: 'pointer',
  }
}

let Pause = ({pause}) => {
  return (
    <button
      style={styles.button}
      className="btn btn-danger"
      onClick={pause}>Pause
    </button>
  )
}

Pause.propTypes = {
  pause: React.PropTypes.func.isRequired,
}

export default Pause = Radium(Pause)
