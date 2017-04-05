import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Navbar } from 'components'
import { openNavbar } from '../store/navbar/actions'

const NavbarContainer = props => <Navbar {...props} />

const mapStateToProps = (state) => {
  return {
    opened: state.navbar.opened,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    open: bindActionCreators(openNavbar, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
