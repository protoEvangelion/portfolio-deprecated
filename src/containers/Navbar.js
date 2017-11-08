import { openNavbar } from 'actions'
import { Navbar } from 'components/organisms'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const NavbarContainer = props => <Navbar {...props} />

const mapStateToProps = state => {
  return {
    opened: state.navbar.opened,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    open: bindActionCreators(openNavbar, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
