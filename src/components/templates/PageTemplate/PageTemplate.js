import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`

const Header = styled.header`
  top: 0;
  width: 100%;
  z-index: 999;
`

const Hero = styled.section``

const Content = styled.section`
  width: 100%;
`

const Footer = styled.footer`
  margin-top: auto;
`

const PageTemplate = ({ header, hero, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {hero && <Hero>{hero}</Hero>}
      <Content id="content">{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
