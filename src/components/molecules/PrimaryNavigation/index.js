import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    transition: color .3s;
    color: white;
    font-size: 15px;
    &.active {
      color: ${palette('grayscale', 0)};
    }
    &:hover {
      text-decoration: none;
      transition: color .3s;
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

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <LinkContainer {...props}>
        <li><Link exact to="/stack" >Stack</Link></li>
        <li><Link to="/allApps" >MicroApps</Link></li>
        <li><Link to="/apiApps" >APIs</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </LinkContainer>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
