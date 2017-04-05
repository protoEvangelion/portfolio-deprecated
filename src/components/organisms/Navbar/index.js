import React from 'react'
import styled from 'styled-components'

import { IconLink, PrimaryNavigation, Block } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  opacity: ${({ opened }) => opened ? 1 : 0.9};
  height: ${({ opened }) => opened ? '100vh' : 'auto'};
  & > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledIconLink = styled(IconLink)`
  display: inline-block;
  transform-origin: center;
`

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`

const Navbar = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      {/* <StyledIconLink to="/" icon="arc" height={100} /> */}
      <StyledPrimaryNavigation reverse {...props} />
    </Wrapper>
  )
}

export default Navbar
