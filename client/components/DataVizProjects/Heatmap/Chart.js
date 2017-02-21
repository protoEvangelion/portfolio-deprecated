import React, {Component} from 'react'
import Radium from 'radium'
import ReactFauxDOM from 'react-faux-dom'
import * as d3 from 'd3'
import d3Scale from 'd3-scale'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'center',
  }
}

let Chart = ({data}) => {

  var margin = { top: 50, right: 0, bottom: 100, left: 100 },
      width = 960 - margin.left - margin.right,
      height = 430 - margin.top - margin.bottom,
      gridSize = Math.floor(width / (data.length / 12)),
      legendElementWidth = gridSize*2,
      buckets = 9,
      colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],
      days = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"];

  //Create the element
  const div = new ReactFauxDOM.Element('div')

  //Pass it to d3.select and proceed as normal
  // let svg = d3.select(div).append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //     .html('<strong>Hello</strong>')
  //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.select(div)
    .html('<strong>hello</strong>')




//DOM manipulations done, convert to React
return div.toReact()
}

export default Chart = Radium(Chart)
