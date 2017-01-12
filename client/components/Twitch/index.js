import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams, fetchFreeCodeCamp } from '../../actions/fetchStreams'
import Streams from './streams'
import Free from './Free'

class Twitch extends Component {
  componentWillMount() {
    this.props.fetchFreeCodeCamp()
    this.props.fetchStreams()
  }
  render() {
    return (
      <div style={{paddingTop: '40px'}}>
        <h2 style={{fontFamily: "'Press Start 2P', 'cursive'", paddingBottom: '30px', color: '#6441a4', fontSize: '50px'}}>Ultra-Cool Twitch Streams!</h2>
        <Free free={this.props.free} />
        <Streams data={this.props.data}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.streams.featured,
    free: state.streams.free
  }
}

export default connect(mapStateToProps, { fetchStreams, fetchFreeCodeCamp })(Twitch)
