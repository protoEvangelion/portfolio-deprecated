import React, {Component} from 'react'
import Radium from 'radium'
import Table from './Table'
import Header from './Header'

import smoothScroll from '../../../helpers/scroll'

const styles = {
  container: {
    marginBottom: '250px',
    marginTop: '40px',
  },
}

class Leaderboard extends Component {
  componentDidMount() {
    smoothScroll(document.getElementById("leaderboardContainer"))
  }
  render() {
    return(
      <div id="leaderboardContainer" style={styles.container}>
        <Header />
        <Table />
      </div>
    )
  }
}

export default Leaderboard = Radium(Leaderboard)
