import React, {Component} from 'react'
import Radium from 'radium'
import axios from 'axios'
import proxyUrl from '../../../api'

const styles = {
}

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const url = `https://www.bea.gov/api/data/?method=GetData&datasetname=RegionalIncome&TableName=CA4&LineCode=30&GeoFIPS=COUNTY&Year=2013&ResultFormat=json&jsonp=MY_FUNCTION_NAME&`
    axios.get(`${proxyUrl}${url}`)
  }
  render() {
    return (
      <div>
        Chart
      </div>
    )
  }
}

export default Chart = Radium(Chart)
