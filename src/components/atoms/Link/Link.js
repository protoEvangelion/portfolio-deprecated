import { omitProps, shade } from '~/utils'
import RouteLink from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { ifProp } from 'styled-tools'

// If you want to have a standard link like one that links to an
//  outside page, then pass a string to the `href` prop
// If you want a react router link then pass a string to the `route` prop
// If you want to wrap it in a <li> tag, pass `li` as a boolean

export const A = styled(props => {
  return (
    <a
      {...omitProps(props, ['absolute', 'block', 'li', 'padding', 'margin'])}
    />
  )
})`
  display: ${ifProp('block', 'block', 'default')};
  text-decoration: none;
  &:hover {
    color: ${props => (props.bg ? shade(props.bg, 0.1) : null)};
  }
  ${color};
`

const Li = styled.li`
  ${space};
`

const Link = props => {
  if (props.absolute) {
    if (props.li) {
      return (
        <Li>
          <A {...props} />
        </Li>
      )
    } else {
      return <A {...props} />
    }
  } else {
    if (props.li) {
      return (
        <Li>
          <RouteLink>
            <A {...props}>{props.children}</A>
          </RouteLink>
        </Li>
      )
    } else {
      return (
        <RouteLink>
          <A {...props}>{props.children}</A>
        </RouteLink>
      )
    }
  }
}

Link.displayName = 'Link'

Link.propTypes = {
  absolute: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  li: PropTypes.bool,
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  absolute: false,
  bg: 'black',
  block: true,
  color: 'white',
  li: false,
}

export default Link
