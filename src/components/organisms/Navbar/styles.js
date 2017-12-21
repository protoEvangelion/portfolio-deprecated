import { Block } from '~/components/atoms'
import { IconLink, PrimaryNavigation } from '~/components/molecules'
import styled from 'styled-components'
import { palette } from 'styled-theme'

export const Wrapper = styled(Block)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0.9)};
  height: ${({ isOpen }) => (isOpen ? '100vh' : 'auto')};
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

export const IconLogo = styled(IconLink)`
  margin-top: 5px;
  margin-left: 10px;
  display: inline-block;
  transform-origin: center;
`

export const Icon = styled(IconLink)`
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

export const PrimaryNav = styled(PrimaryNavigation)`
  flex: 1;
  @media (max-width: 700px) {
    display: none;
  }
`

export const SecondaryNav = styled(PrimaryNavigation)`
  display: none;
  @media (max-width: 700px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    width: 90%;
    top: 35px;
    left: 20px;
    > li {
      padding: 15px 0 15px 0;
      border-bottom: 1px solid ${palette('grayscale', 1)};
    }
  }
`
