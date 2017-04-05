import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;
  align-self: flex-start;
  position: relative;
  margin-left: -5px;
  width: 48px;
  height: 28px;
  @media (min-width: 700px) {
    display: none;
  }
`

const Line1 = styled.span`
  top: 10px;
  transition: transform .4s;
  transform:
    rotate(${({ opened }) => opened ? 135 : 0}deg)
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
  transition: transform .4s;
  transform:
    rotate(${({ opened }) => opened ? 45 : 0}deg)
    translate(
      ${({ opened }) => opened ? -4.2 : 0}px,
      ${({ opened }) => opened ? -5.2 : 0}px
    );
  display: block;
  width: 17px;
  height: 1px;
  background: white;
  position: absolute;
  left: 16px;
  z-index: 1;
`

const MenuButton = ({ open, opened }) => {
  return (
    <Wrapper
      onClick={() => open()}
    >
      <Line1 opened={opened} />
      <Line2 opened={opened} />
    </Wrapper>
  )
}

MenuButton.propTypes = {
  open: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
}

export default MenuButton
