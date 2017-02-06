import React, {Component} from 'react'
import Radium from 'radium'

const styles = {
  container: {
    padding: '5px',
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        Hello
      </div>
    )
  }
}

export default App = Radium(App)
