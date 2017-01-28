import React, { Component } from 'react'
import SearchBar from './SearchBar'
import WeatherList from './WeatherList'
import MyArea from './MyArea'
import './style.css'

export default class Weather extends Component {
  render() {
    return (
      <div className="container containerComp">
      	<SearchBar />
      	<h1 id="OrOption" className="center">Or:</h1>
      	<MyArea />
      	<WeatherList />
      </div>
    );
  }
}
