import React from 'react'
import Radium from 'radium'

const styles = {
  marginBottom: '40px'
}

let Player = (props) => {
  let who = props.currentPlayer == props.humanPlayer ? ' (You)' : ' (AI)'
  return (
    <div>
      <h3>Current Player:</h3>
      <h4 style={styles}>{props.currentPlayer}{who}</h4>
    </div>
  )
}

export default Player = Radium(Player)
