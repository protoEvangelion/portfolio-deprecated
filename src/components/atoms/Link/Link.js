import { omitProps, shade } from '~/utils'
import RouteLink from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { ifProp } from 'styled-tools'

// If you want to have a standard link like one that links to an
//  outside page, then pass true to the absolute prop

export const A = styled(props => {
  return (
    <a
      {...omitProps(props, [
        'absolute',
        'block',
        'href',
        'li',
        'padding',
        'margin',
      ])}
    />
  )
})`
  cursor: pointer;
  display: ${ifProp('block', 'block', 'default')};
  text-decoration: none;
  &:hover {
    color: ${props => (props.color ? shade(props.color, 0.1) : null)};
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
          <RouteLink href={props.href}>
            <A {...props}>{props.children}</A>
          </RouteLink>
        </Li>
      )
    } else {
      return (
        <RouteLink href={props.href}>
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
  bg: 'transparent',
  block: true,
  color: 'white',
  li: false,
}

export default Link
