import React from 'react'
import Radium from 'radium'
import Collapse from 'react-collapse'

const styles = {
  container: {
    display: 'inline-block'
  },
  topBtn: {
    margin: '5px',
    cursor: 'pointer',
  },
  button: {
    margin: '5px',
    cursor: 'pointer',
    display: 'block'
  }
}

let Speeds = ({expandSpeeds, expanded, setSpeed}) => {
  return (
    <div style={styles.container}>
      <button
        style={styles.topBtn}
        className="btn btn-primary"
        onClick={expandSpeeds}>Speeds
      </button>
      <Collapse isOpened={expanded}>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={() => setSpeed(1000)}>Slow
        </button>
				<button
          style={styles.button}
          className="btn btn-info"
          onClick={() => setSpeed(100)}>Medium
        </button>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={() => setSpeed(50)}>Fast
        </button>
      </Collapse>
    </div>
  )
}

Speeds.propTypes = {
  expandSpeeds: React.PropTypes.func.isRequired,
  expanded: React.PropTypes.bool.isRequired,
  setSpeed: React.PropTypes.func.isRequired,
}

export default Speeds = Radium(Speeds)
