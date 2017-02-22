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

    let tooltip = d3.select('#chart').append('div')
          .style('position', 'absolute')
          .style('padding', '0 10px')
          .style('background', 'white')
          .style('opacity', 0)

    let myChart = d3.select('#chart').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', 'lightgrey')
        .selectAll('rect').data(barData)
        .enter().append('rect')
          .style('fill', colors)
          .attr('width', d => xScale.bandwidth())
          .attr('x', (d, i) => xScale(i))
          .attr('height', 0)
          .attr('y', height)
				.on('mouseover', function(d) {
          tooltip.transition()
              .style('opacity', .9)

          tooltip.html(d)
              .style('left', (d3.event.pageX - 35) + 'px')
              .style('top',  (d3.event.pageY - 30) + 'px')

          d3.select(this)
              .transition()
							.style('opacity', .5)
				})
        .on('mouseout', function(d) {
          tooltip.transition()
              .style('opacity', 0)

          d3.select(this)
              .transition()
              .style('opacity', 1)
        })

      myChart.transition()
        .attr('height', d => yScale(d))
        .attr('y', d => height - yScale(d))
        .delay((d, i) => i * 20)
        .duration(1000)

  }
  render() {
    return (
      <div id="chart"></div>
    )
  }
}

export default App = Radium(App)
