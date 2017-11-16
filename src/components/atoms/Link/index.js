import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { ifProp } from 'styled-tools'
import { omitSpace, shade } from 'utils'

// If you want to have a standard link like one that links to an
//  outside page, then pass a string to the `href` prop
// If you want a react router link then pass a string to the `route` prop
// If you want to wrap it in a <li> tag, pass `li` as a boolean

export const StandardLink = styled(props => (
  <a {...omitSpace(props, ['block', 'to', 'li'])} />
))`
  display: ${ifProp('block', 'block', 'default')};
  text-decoration: none;
  &:hover {
    background-color: ${props => shade(props.bg, 0.1)};
  }
  ${color};
`

const RouteLink = styled(props => (
  <Link {...omitSpace(props, ['block', 'href', 'li'])} />
))`
  display: ${ifProp('block', 'block', 'default')};
  text-decoration: none;
  &:hover {
    background-color: ${props => shade(props.bg, 0.1)};
  }
  ${color} ${space};
`

const ListItem = styled.li`
  ${space};
`

const StyledLink = props => {
  if (props.to) {
    return props.li ? (
      <li>
        <RouteLink {...props} />
      </li>
    ) : (
      <RouteLink {...props} />
    )
  } else {
    return props.li ? (
      <ListItem>
        <StandardLink {...props} />
      </ListItem>
    ) : (
      <StandardLink {...props} />
    )
  }
}

StyledLink.displayName = 'Link'

StyledLink.propTypes = {
  block: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  li: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
}

StyledLink.defaultProps = {
  bg: 'black',
  block: true,
  color: 'white',
  li: true,
}

export default StyledLink
