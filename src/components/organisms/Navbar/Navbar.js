import { MenuButton, PrimaryNav } from '~/components/molecules'
import { toggleNav } from '~/store/navbar/action'
import React from 'react'
import { connect } from 'react-redux'

import { IconLogo, MenuItem, Nav, StyledIcon, Wrapper } from './styles'

const Navbar = props => {
  return (
    <Wrapper opaque reverse {...props}>
      <MenuButton isOpen={props.isOpen} toggleNav={props.toggleNav} />

      <IconLogo height={100} href="/portfolio" name="logo" />

      <PrimaryNav />
      {/* <Nav reverse {...props}>
        <ul>
          <MenuItem href="/about" key="about">
            About
          </MenuItem>

          <MenuItem href="/projects" key="projects">
            Projects
          </MenuItem>

          <MenuItem href="/contact" key="contact">
            Contact
          </MenuItem>
        </ul>
      </Nav> */}

      <StyledIcon href="/allApps" icon="briefcase" height={100} />
    </Wrapper>
  )
}

const mapStateToProps = state => ({ isOpen: state.navbar.isOpen })

export default connect(mapStateToProps, { toggleNav })(Navbar)
