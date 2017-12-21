import { media } from '~/styled'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;
  align-self: flex-start;
  position: relative;
  margin-top: ${({ isOpen }) => (isOpen ? 5 : 2)}px;
  margin-left: -5px;
  width: 48px;
  height: 28px;

  ${media.greaterThan('sm')`
    display: none;
  `};
`

const Line1 = styled.span`
  top: 10px;
  transition: transform 0.4s;
  transform: rotate(${({ isOpen }) => (isOpen ? 135 : 0)}deg);
  display: block;
  width: 17px;
  height: 1px;
  background: white;
  position: absolute;
  left: 16px;
  z-index: 1;
`
const Line2 = styled.span`
  top: 17px;
  transition: transform 0.4s;
  transform: rotate(${({ isOpen }) => (isOpen ? 45 : 0)}deg)
    translate(
      ${({ isOpen }) => (isOpen ? -4.2 : 0)}px,
      ${({ isOpen }) => (isOpen ? -5.2 : 0)}px
    );
  display: block;
  width: 17px;
  height: 1px;
  background: white;
  position: absolute;
  left: 16px;
  z-index: 1;
`

const MenuButton = ({ toggleNav, isOpen }) => {
  return (
    <Wrapper isOpen={isOpen} onClick={() => toggleNav(isOpen)}>
      <Line1 isOpen={isOpen} />
      <Line2 isOpen={isOpen} />
    </Wrapper>
  )
}

MenuButton.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default MenuButton
