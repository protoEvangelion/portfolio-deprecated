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

let Sizes = ({expandSizes, expanded, setSize}) => {
  return (
    <div style={styles.container}>
      <button
        style={styles.topBtn}
        className="btn btn-primary"
        onClick={expandSizes}>Sizes
      </button>
      <Collapse isOpened={expanded}>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={() => setSize(20, 20)}>Small
        </button>
				<button
          style={styles.button}
          className="btn btn-info"
          onClick={() => setSize(500, 8)}>Medium
        </button>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={() => setSize(1000, 8)}>Jumbo
        </button>
      </Collapse>
    </div>
  )
}

Sizes.propTypes = {
  expandSizes: React.PropTypes.func.isRequired,
  expanded: React.PropTypes.bool.isRequired,
  setSize: React.PropTypes.func.isRequired,
}

export default Sizes = Radium(Sizes)
