import { MenuButton } from '~/components/molecules'
import { toggleNav } from '~/store/navbar/action'
import React from 'react'
import { connect } from 'react-redux'

import { Icon, IconLogo, Link, MenuItem, Nav, Wrapper } from './styles'

const Navbar = props => {
  return (
    <Wrapper opaque reverse {...props}>
      <MenuButton isOpen={props.isOpen} toggleNav={props.toggleNav} />

      <IconLogo href="/" icon="whiteLogo" height={100} />

      <Nav reverse {...props}>
        <Link href="/portfolio">
          <img alt="Ryan's logo" />
        </Link>

        <Link href="about">
          <MenuItem key="about">About</MenuItem>
        </Link>

        <Link href="projects">
          <MenuItem key="projects">Projects</MenuItem>
        </Link>

        <Link href="contact">
          <MenuItem key="contact">Contact</MenuItem>
        </Link>
      </Nav>

      <Icon href="/allApps" icon="briefcase" height={100} />
    </Wrapper>
  )
}

const mapStateToProps = state => ({ isOpen: state.navbar.isOpen })

export default connect(mapStateToProps, { toggleNav })(Navbar)
