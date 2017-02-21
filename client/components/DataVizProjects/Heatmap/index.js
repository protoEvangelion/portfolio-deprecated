import React from 'react'
import Radium from 'radium'
import Chart from './Chart'
import data from './heatData'
import Tester from './tester'
import './style.css'

const styles = {
  container: {
    display: 'flex',
		flexDirection: 'column',
    alignItems: 'center',
  }
}

let Heatmap = () => {
  return (
    <div style={styles.container}>
      {/* <Chart wide={500} tall={500} baseTemp={data.baseTemperature} data={data.monthlyVariance}/> */}
      <Tester />
    </div>
  )
}

export default Heatmap = Radium(Heatmap)
