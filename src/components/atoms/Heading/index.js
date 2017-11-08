import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'

export const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`

const Header = styled.h1`
  font-family: 'Coda';
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${ifProp('background', 'white', 'black')};
  z-index: 999;
`

const Heading = ({ background, header }) => (
  <Header background={background}>{header}</Header>
)

Heading.propTypes = {
  header: PropTypes.string,
  background: PropTypes.bool,
}

export default Heading
