import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { fetchStreams } from '../../actions/fetchStreams'
import Stream from './Stream'

class Streams extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }
  render() {
    return (
      <div>
        <Stream streams={this.props.streams} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStreams }, dispatch)
}

function mapStateToProps(state) {
  return {streams: state.streams}
}

export default connect(mapStateToProps, mapDispatchToProps)(Streams)
