import React from 'react'
import Radium from 'radium'
import Header from './Header'
import Footer from './Footer'
import Chart from './Chart'

const styles = {
  container: {
    marginTop: '50px',
    display: 'flex',
		flexDirection: 'column',
    alignItems: 'center',
  }
}

let GDP = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Chart />
      <Footer />
    </div>
  )
}

export default GDP = Radium(GDP)
