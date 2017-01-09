import React, { Component } from 'react'
import SearchBar from './SearchBar'
import WeatherList from './WeatherList'

export default class Weather extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
