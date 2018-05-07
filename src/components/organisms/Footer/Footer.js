import { Icon, Link, Text } from 'components/atoms'
import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background-color: ${palette('grayscale', 1, true)};
  padding: 2rem;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`

const Credits = styled(Text)`
  margin: 0;
  @media (max-width: 640px) {
    padding: 10px;
  }
`

const Footer = props => {
  return (
    <Wrapper {...props}>
      <Credits>
        Made with <Icon name="heart" /> by{' '}
        <Link href="https://github.com/protoEvangelion">Filler P</Link>
      </Credits>
      <Credits>Copyright © 2017</Credits>
    </Wrapper>
  )
}

export default Footer
