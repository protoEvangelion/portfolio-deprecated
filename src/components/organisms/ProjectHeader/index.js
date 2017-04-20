import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Heading } from 'components'

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
  background: linear-gradient(to left, ${palette('gradient', 0)}, ${palette('gradient', 1)});
`

const ProjectHeader = () => (
  <Wrapper>
    <Heading>yo</Heading>
  </Wrapper>
)

ProjectHeader.propTypes = {
  Header: PropTypes.string.isRequired,
}

export default ProjectHeader
