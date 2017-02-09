import React from 'react'
import Radium from 'radium'
import Collapse from 'react-collapse'

const styles = {
  button: {
    margin: '20px',
    cursor: 'pointer',
  }
}

let Patterns = ({expandPatterns, expanded, placePattern}) => {
  return (
    <div>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={expandPatterns}>Choose Pattern
      </button>
      <Collapse isOpened={expanded}>
        <button
          style={styles.button}
          className="btn btn-info"
          onClick={placePattern}>Gosper Gun
        </button>
      </Collapse>
    </div>
  )
}

Patterns.propTypes = {
  expandPatterns: React.PropTypes.func.isRequired,
  expanded: React.PropTypes.bool.isRequired,
  placePattern: React.PropTypes.func.isRequired,
}

export default Patterns = Radium(Patterns)
