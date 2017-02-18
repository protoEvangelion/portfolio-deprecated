import React from 'react'
import Radium from 'radium'

const styles = {
  container: {
		display: 'flex',
    justifyContent: 'center',
  }
}

let CustomTip = ({payload}) => {
  return (
		<div className="custom-tooltip">
			<p className="desc">Anything you want can be displayed here.</p>
		</div>
  )
}

// App.propTypes = {
//   prop: React.PropTypes.func.isRequired,
// }

export default CustomTip = Radium(CustomTip)
