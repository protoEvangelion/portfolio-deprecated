import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  border-radius: 50%;
  height: ${props => props.size}px;
  padding: 20px;
`

const Avatar = ({ size, src }) => {
  return <Image size={size} src={src} />
}

Avatar.defaultProps = {
  size: '200px',
  src: '/public/projectimages/calc.png',
}

Avatar.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Avatar
