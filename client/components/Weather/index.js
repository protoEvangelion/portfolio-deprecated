import React, { Component } from 'react'
import SearchBar from './SearchBar'
import WeatherList from './WeatherList'
import MyArea from './MyArea'
import './style.css'

export default class Weather extends Component {
  render() {
    return (
      <div className="container">
      	<SearchBar />
      	<h1>Or:</h1>
      	<MyArea />
      	<WeatherList />
      </div>
    );
  }
}
