import { Link } from '~/components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    transition: color 0.3s;
    color: white;
    font-size: 15px;
    &.active {
      color: ${palette('grayscale', 0)};
    }
    &:hover {
      text-decoration: none;
      transition: color 0.3s;
      color: ${palette('grayscale', 3)};
    }
  }
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const PrimaryNavigation = props => {
  return (
    <Nav {...props}>
      <LinkContainer {...props}>
        <Link margin={0} href="/stack">
          Stack
        </Link>
        <Link href="/allApps">MicroApps</Link>
        <Link href="/apiApps">APIs</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </LinkContainer>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
