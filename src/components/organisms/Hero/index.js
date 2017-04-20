import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Avatar, Block, Paragraph, IconLink, IconButton } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 3.75rem);
  max-height: 700px;
  padding: 2rem 6rem;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 3)}
  margin: 3rem auto;
  max-width: 800px;
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  letter-spacing: 0.07em;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const StyledIconButton = styled(IconButton)`
  flex: none;
`

const Hero = (props) => {
  return (
    <Wrapper {...props}>
      <Avatar />
    </Wrapper>
  )
}

export default Hero
