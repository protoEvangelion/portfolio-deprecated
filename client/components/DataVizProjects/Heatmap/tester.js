import React, {Component} from 'react'
import Radium from 'radium'
import * as d3 from 'd3'
import d3Scale from 'd3-scale'

const styles = {
  svg: {
    background: 'lightgrey',
  },
  rect: {
    fill: 'yellow',
  },
  circle: {
    fill: 'red',
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    let barData = [20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15, 20, 30, 2, 15],
      height=500,
      width=700,
      barWidth=50,
      barOffset=5;

    let colors = d3.scaleLinear()
          .domain([0, d3.max(barData)])
          .range(['magenta', 'yellow'])

    let yScale = d3.scaleLinear()
          .domain([0, d3.max(barData)])
          .range([0, height])

    let xScale = d3.scaleBand()
          .domain(d3.range(0, barData.length))
          .range([0, width])

    d3.select('#chart').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', 'lightgrey')
        .selectAll('rect').data(barData)
        .enter().append('rect')
          .style('fill', colors)
          .attr('width', d => xScale.bandwidth())
          .attr('height', d => yScale(d))
          .attr('x', (d, i) => xScale(i))
          .attr('y', d => height - yScale(d))
  }
  render() {
    return (
      <div id="chart"></div>
    )
  }
}

export default App = Radium(App)
