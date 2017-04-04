import React from 'react'
import { connect } from 'react-redux'

import { Header } from 'components'

const HeaderContainer = props => <Header {...props} />

const mapStateToProps = (state, { opened }) => opened

const mapDispatchToProps = 
