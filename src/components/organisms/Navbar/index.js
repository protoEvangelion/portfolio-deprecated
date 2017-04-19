import React from 'react'
import styled from 'styled-components'
import { IconLink, MenuButton, PrimaryNavigation, Block } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  opacity: ${({ opened }) => opened ? 1 : 0.9};
  height: ${({ opened }) => opened ? '100vh' : 'auto'};
  & > :not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: 700px) {
    align-items: flex-start;
  }
  @media (min-width: 700px) {
    height: auto;
  }
`

const StyledIconLogo = styled(IconLink)`
  margin-left: 10px;
  display: inline-block;
  transform-origin: center;
`

const StyledIconLink = styled(IconLink)`
  margin-top: -10px;
  margin-right: 10px;
  height: 20px;
  color: white;
  display: inline-block;
  transform-origin: center;
  @media (max-width: 700px) {
    margin-top: 2px;
  }
`

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1;
  @media (max-width: 700px) {
    display: none;
  }
`

const StyledSecondaryNavigation = styled(PrimaryNavigation)`
  display: none;
  @media (max-width: 700px) {
    display: ${({ opened }) => opened ? 'block' : 'none'};
    position: absolute;
    width: 90%;
    top: 35px;
    left: 20px;
    > li {
      padding: 15px 0 15px 0;
      border-bottom: 1px solid white;
    }
  }
`

const Navbar = (props) => {
  return (
    <div>
      <Wrapper opaque reverse {...props}>
        <MenuButton {...props} />
        <StyledIconLogo to="/" icon="whiteLogo" height={100} />
        <StyledPrimaryNavigation reverse {...props} />
        <StyledIconLink to="/projects" icon="briefcase" height={100} />
      </Wrapper>
      <StyledSecondaryNavigation reverse {...props} />
    </div>
  )
}

export default Navbar
