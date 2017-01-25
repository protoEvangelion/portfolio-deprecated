import React from 'react'
import Radium from 'radium'

const styles = {
  btn: {
    cursor: 'pointer',
    background: '#ede500',
    width: '4.7%',
    height: '5.2%',
    borderRadius: '50%',
    outlineStyle: 'none',
    position: 'absolute',
    border: '1px solid #4f4f4f',
    boxShadow: '1px 1px 2px #4f4f4f',
    top: '51%',
    left: '61%',
    transition: 'all ease 0.3s',
    ':active': {
      outlineStyle: 'none',
      boxShadow: 'inset 0px 0px 4px #8c8700',
    }
  },
  text: {
    position: 'absolute',
    top: '57%',
    left: '59%',
    fontSize: '70%',
    color: 'black',
  },
}

let Strict = ({}) => {
  return(
    <div>
      <button
        style={styles.btn}></button>
      <p style={styles.text}>strict</p>
    </div>
  )
}

// Start.propTypes = {
//   start: React.PropTypes.func.isRequired
// }

export default Strict = Radium(Strict)
