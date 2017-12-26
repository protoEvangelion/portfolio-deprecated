import { Heading } from '~/components/atoms'
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
  return <Heading>freeCodeCamp Super Cool People Leaderboard</Heading>
}

export default connectRedux(null, null)(Leaderboard)
