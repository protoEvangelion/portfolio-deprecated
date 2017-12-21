import { Block } from '~/components/atoms'
import { IconLink, PrimaryNavigation } from '~/components/molecules'
import NextLink from 'next/link'
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

export const Link = styled(NextLink)`
  text-decoration: none;
  user-select: none;
  &:hover {
    text-decoration: none;
  }
`

export const MenuItem = styled.li`
  cursor: pointer;
  height: 100%;
  padding: 23px 20px 29px 20px;
  color: black;
  font-size: 20px;
  list-style: none;
  background: white;
  transition: background 1.5s ease;
  &:hover {
    transition: background 1.5s ease;
    background: #b3ffab;
    background: webkit-linear-gradient(to left, #b3ffab, #12fff7);
    background: linear-gradient(to left, #b3ffab, #12fff7);
  }
`

export const Image = styled.img`
  width: 50px;
  margin: 10px 20px 10px 15px;
`
