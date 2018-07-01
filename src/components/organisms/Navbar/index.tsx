import { Box, Flex } from 'components/atoms'
// import { MenuButton } from 'components/molecules'
import Link from 'gatsby-link'
import * as React from 'react'
import { connect } from 'react-redux'
import ReactSVG from 'react-svg'
import { toggleNav } from 'store/navbar/action'
import { Wrapper } from './styles'
import { Icon } from 'semantic-ui-react'
import { color, styled } from 'styled'
import { Logo } from './logo'

const StyledLink = styled(Link)`
  ${color};
`

StyledLink.defaultProps = {
  color: 'foreground',
}

const BaseNavbar: React.SFC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Wrapper align={['flex-start', 'center']} bg="black" p={3} isOpen={isOpen}>
      {/* <MenuButton isOpen={props.isOpen} toggleNav={props.toggleNav} /> */}

      <Link to="/portfolio">
        <Logo />
      </Link>

      <Flex color="white" justify="space-around" width={1}>
        <StyledLink to="/stack">Stack</StyledLink>
        <StyledLink to="/allApps">MicroApps</StyledLink>
        <StyledLink to="/apiApps">APIs</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Flex>

      <Icon color="grey" name="briefcase" />
    </Wrapper>
  )
}

// export const Navbar = () => <div>no</div>

const mapStateToProps = state => ({ isOpen: state.ui.navbarIsOpen })

export const Navbar = connect(
  mapStateToProps,
  { toggleNav },
)(BaseNavbar)
