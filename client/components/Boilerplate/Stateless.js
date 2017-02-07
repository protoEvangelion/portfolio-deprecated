import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
    margin: '0 auto',
    textAlign: 'center',
  }
}

let App = () => {
  return (
    <div style={styles.container}>
      Hello
    </div>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default App = Radium(App)
