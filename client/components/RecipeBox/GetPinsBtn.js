import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    padding: '10px',
    cursor: 'pointer',
  }
}

let GetPinsBtn = ({getPins}) => {
  return (
    <button
      onClick={getPins}
      className='btn btn-primary'
      style={styles.container}>
      Get Pins
    </button>
  )
}

export default GetPinsBtn = Radium(GetPinsBtn)
