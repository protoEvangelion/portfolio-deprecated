import { Hide } from 'components/atoms'
import { MenuButton } from 'components/molecules'
import Link from 'gatsby-link'
import * as React from 'react'
import { connect } from 'react-redux'
import ReactSVG from 'react-svg'
import { Flex } from 'rebass'
import { toggleNav } from 'store/navbar/action'

import { Wrapper } from './styles'

const BaseNavbar = props => {
  return (
    <Wrapper opaque reverse {...props}>
      <MenuButton isOpen={props.isOpen} toggleNav={props.toggleNav} />

      <Link to="/portfolio">
        <ReactSVG path="logo.svg" />
      </Link>

      <Hide small width="100%">
        <Flex justify="space-around" width="100%">
          <Link to="/stack">Stack</Link>
          <Link to="/allApps">MicroApps</Link>
          <Link to="/apiApps">APIs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Flex>
      </Hide>

      {/* <StyledIcon href="/allApps" name="briefcase" height={100} /> */}
    </Wrapper>
  )
}

const mapStateToProps = state => ({ isOpen: state.navbar.isOpen })

export const Navbar = connect(
  mapStateToProps,
  { toggleNav },
)(BaseNavbar)
