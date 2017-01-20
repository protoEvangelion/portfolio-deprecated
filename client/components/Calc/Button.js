import React from 'react'
import Radium from 'radium'

let Button = ({ color, content, type, size, click}) => {
  const marginTop = type === 'bottom' ? '-45px' : '5.5px'
  const plusHeight = type === 'plus' ? '90px' : '40px'
  const plusAlign = type === 'plus' ? '25px' : '0px'
  const fontSize = size === 'big' ? '2em' : '1em'
  const lineHeight = size === 'big' ? '30px' : '40px'
  let styles = {
    width: '51px',
    height: `${plusHeight}`,
    lineHeight: `${lineHeight}`,
    display: 'inline-block',
    margin: `${marginTop} 5.5px 5.5px 5.5px`,
    padding: `${plusAlign} 0px 0px 0px`,
    borderRadius: '5px',
    color: 'white',
    float: 'left',
    cursor: 'pointer',
    background: `${color}`,
    fontSize: `${fontSize}`
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
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
}

export default Button = Radium(Button)
