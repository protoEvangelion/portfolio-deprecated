import React, {Component} from 'react'

export default class Cell extends Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: false,
        nextState: false,
      }
    }
    handleClick() {
        console.log('clicked')
        this.setState({selected: !this.state.selected})
    }
    render() {
        return (
            <div
                className={this.state.selected === true ? 'lifeSquare lifeSquareActive' : 'lifeSquare'}
                onClick={() => this.handleClick()}>
            </div>
        )
    }
}
