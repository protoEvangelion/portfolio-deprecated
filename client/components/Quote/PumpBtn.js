import React, { Component } from 'react'
import { fetchQuote } from '../../actions'
import { Button } from 'react-bootstrap'

export default class PumpBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoading: false} 
 		this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({isLoading: true});
    this.props.fetch()
    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }
  render() {
    let isLoading = this.state.isLoading;
    return (
      <Button
        style={{margin: '30px'}}
        bsSize="large"
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}>
        {isLoading ? 'Loading...' : 'Pump Quote'}
      </Button>
    )
  }
}