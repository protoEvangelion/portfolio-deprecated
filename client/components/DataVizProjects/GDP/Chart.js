import React, {Component} from 'react'
import Radium from 'radium'
import axios from 'axios'
import proxyUrl from '../../../api'
import * as d3 from 'd3'
import {BarChart} from 'react-d3-components'

const styles = {
}

class GDPChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gdpData: []
    }
  }
  componentWillMount() {
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=GDP&file_type=json&fq=Quarterly&api_key=`
    axios.get(`${proxyUrl}${url}`)
      .then(res => {
        let filteredData = res.data.observations.filter(gdp => {
          return gdp.value !== '.'
        })
        let gdpData = filteredData.map((gdp, i) => {
          return {
            y: gdp.date,
            x: gdp.value
          }
        })
        this.setState({gdpData})
        console.log(res)
      })
      .catch(err => console.log(err))

  }
  componentDidMount() {

  }
  renderChart(gdpData) {
    const altData = [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    const data = [{
      label: 'somethingA',
      values: gdpData.slice(270)
    }]
    const chart = <BarChart
                    data={data}
                    width={1000}
                    height={1000}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}/>

    return gdpData.length > 1
      ? chart
      : <i style={{color: '#33adff', marginTop: '50px'}} className="fa fa-spinner fa-pulse fa-3x" aria-hidden="true"></i>
  }
  render() {
    return (
      <div>
        {this.renderChart(this.state.gdpData)}
      </div>
    )
  }
}

export default GDPChart = Radium(GDPChart)
