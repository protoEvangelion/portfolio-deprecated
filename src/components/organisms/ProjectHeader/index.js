import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { Heading, Link } from 'components'
import { ifProp } from 'styled-tools'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px 0;
  height: 300px;
  width: 100%;
  ${ifProp('flip', css`
    flex-direction: row-reverse;
  `)}
  ${ifProp('background', css`
    background: linear-gradient(to left, ${palette('gradient', 0)}, ${palette('gradient', 1)});
  `)}
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`

const ProjectImage = styled.img`
  border-radius: 10px;
  height: inherit;
  @media (max-width: 1000px) {
    height: 300px;
    margin-bottom: 20px;
  }
`

const HeadingCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  width: 50vw;
  text-align: center;
`

const StyledLink = styled(Link)`
  margin-top: 15px;
`

const ProjectHeader = ({ header, background, image, flip, link, to, href }) => (
  <Wrapper background={background} flip={flip} >
    <ProjectImage src={image} />
    <HeadingCtn>
      <Heading background={background} header={header} />
      <StyledLink to={to} href={href}>{link}</StyledLink>
    </HeadingCtn>
  </Wrapper>
)

ProjectHeader.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  background: PropTypes.bool,
  flip: PropTypes.bool,
  link: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
}

export default ProjectHeader
