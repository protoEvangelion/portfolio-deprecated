import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  margin-left: -5px;
  width: 48px;
  height: 48px;
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

export default class MenuButton extends Component {
  constructor(props) {
    super(props)
    this.state = { opened: false }
  }
  render() {
    return (
      <Wrapper
        onClick={() => this.setState({ opened: !this.state.opened })}
      >
        <Line1 opened={this.state.opened} />
        <Line2 opened={this.state.opened} />
      </Wrapper>
    )
  }
}
