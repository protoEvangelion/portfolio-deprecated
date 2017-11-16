import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { colors } from 'theme'
import icons from 'theme/icons.json'

const StyledSvg = styled.svg`
  display: block;
`

const Base = ({ fill, name, size, ...props }) => {
  const icon = icons[name]

  if (!icon) return false

  return (
    <StyledSvg
      {...props}
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill={colors[fill]}
    >
      <path d={icon.path} />
    </StyledSvg>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${space};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  fill: 'primary',
  name: 'checkLight',
  size: 24,
}

Base.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Icon
