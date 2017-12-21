import { Block, Icon, Link } from '~/components/atoms'
import { IconButton } from '~/components/molecules'
import styled, { css } from 'styled-components'
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

export const IconLogo = styled(Icon)`
  margin-top: 5px;
  margin-left: 10px;
  display: inline-block;
  transform-origin: center;
`

export const StyledIcon = styled(IconButton)`
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

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  @media (max-width: 700px) {
    display: none;

    ${props =>
      props.isOpen &&
      css`
        display: block;
        position: absolute;
        width: 90%;
        top: 35px;
        left: 20px;
        > li {
          padding: 15px 0 15px 0;
          border-bottom: 1px solid ${palette('grayscale', 1)};
        }
      `};
  }
`

export const MenuItem = styled(Link)`
  cursor: pointer;
  height: 100%;
  padding: 23px 20px 29px 20px;
  font-size: 20px;
  list-style: none;
  transition: background 1.5s ease;
`

export const Image = styled.img`
  width: 50px;
  margin: 10px 20px 10px 15px;
`
