import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { Heading } from 'components'
import { ifProp } from 'styled-tools'

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  ${ifProp('background', css`
    background: linear-gradient(to left, ${palette('gradient', 0)}, ${palette('gradient', 1)});
  `)}  
`

const ProjectHeader = ({ header, background }) => (
  <Wrapper background={background} >
    <Heading>{header}</Heading>
  </Wrapper>
)

ProjectHeader.propTypes = {
  header: PropTypes.string.isRequired,
  background: PropTypes.bool,
}

export default ProjectHeader
