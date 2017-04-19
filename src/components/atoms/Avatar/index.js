import React from 'react'
import styled from 'styled-components'
import headshot from './headshot.jpg'

const Headshot = styled.img`
  border-radius: 50%;
  height: ${props => props.size};
`

const Avatar = () => {
  return (
    <Headshot src={headshot} />
  )
}

Avatar.defaultProps = {
  size: '200px',
}

export default Avatar
