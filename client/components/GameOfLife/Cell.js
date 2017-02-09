import React, {Component} from 'react'
import Radium from 'radium'
import shallowCompare from 'react-addons-shallow-compare'

const styles = {
	cell: {
		width: '7px',
		height: '7px',
		cursor: 'pointer',
		borderRight: '1px solid lightgrey',
		borderBottom: '1px solid lightgrey',
		display: 'block',
		float: 'left',
	}
}

class Cell extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState)
	}
	render() {
		return (
	    <div
	      className={`lifeSquare ${this.props.value === true ? 'alive' : ''}`}
	      onClick={() => this.props.cellClick(this.props.x, this.props.y)}>
	    </div>
	  )
	}
}

export default Cell = Radium(Cell)
