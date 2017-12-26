import { connectRedux } from '~/store'
import React from 'react'

const styles = {
  text: {
    display: 'block',
    width: '100%',
    lineHeight: '100%',
    color: 'white',
    background: 'darkgreen',
    marginBottom: '20px',
    marginTop: '20px',
    padding: '20px',
    fontFamily: "'Grand Hotel', cursive",
    fontSize: '3em',
    textAlign: 'center',
  },
}

const Leaderboard = () => {
  return <h3 style={styles.text}>freeCodeCamp Super Cool People Leaderboard</h3>
}

export default connectRedux()(Leaderboard)
