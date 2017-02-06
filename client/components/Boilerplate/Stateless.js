import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    padding: '5px',
  }
}

let App = () => {
  return (
    <div style={styles.container}>
      Hello
    </div>
  )
}

export default App = Radium(App)
