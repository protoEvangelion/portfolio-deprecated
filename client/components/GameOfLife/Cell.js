import React, {Component} from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }
  handleClick() {
    this.props.cellClick(this.props.name)
    this.setState({selected: !this.state.selected})
  }
  render() {
    return (
      <div
        className={this.props.value === true ? 'lifeSquare lifeSquareActive' : 'lifeSquare'}
        onClick={() => this.handleClick()}>
      </div>
    )
  }
}
