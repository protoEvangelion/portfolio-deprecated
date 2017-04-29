import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Avatar, Block, Paragraph, SocialBtns } from 'components'
import headshot from '../../../../public/projectimages/headshot.jpg'

const Wrapper = styled(Block)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  padding: 2rem 6rem;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 0)}
  max-width: 800px;
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  letter-spacing: 0.07em;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const Hero = (props) => {
  return (
    <Wrapper {...props}>
      <Avatar size="250" src={headshot} />
      <SocialBtns />
      <Text>Ryan Garant</Text>
      <Text><em>Full Stack JavaScript Web Developer</em></Text>
    </Wrapper>
  )
}

export default Hero
