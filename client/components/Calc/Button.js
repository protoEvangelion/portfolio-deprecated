import React from 'react'
import Radium from 'radium'

let Button = ({ color, content, type, click}) => {
  const marginTop = type === 'bottom' ? '-45px' : '5.5px'
  const plusHeight = type === 'plus' ? '90px' : '40px'
  let styles = {
    width: '51px',
    height: `${plusHeight}`,
    display: 'inline-block',
    margin: `${marginTop} 5.5px 5.5px 5.5px`,
    borderRadius: '5px',
    color: 'white',
    lineHeight: '40px',
    float: 'left',
    cursor: 'pointer',
    background: `${color}`
  }

  return(
    <div style={styles} onClick={() => click(content)} value={content}>
      {content}
    </div>
  )
}

React.propTypes = {
  color: React.PropTypes.string.isRequired,
  content: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  type: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
}

export default Button = Radium(Button)
