import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Avatar = ({ resolutions }) => <Img resolutions={resolutions} />

Avatar.propTypes = {
  resolutions: PropTypes.object,
}

export default Avatar
