import { HorizontalRule } from 'components/atoms'
import { Banner } from 'components/molecules'
import { AppList, Footer, Navbar } from 'components/organisms'
import { PageTemplate } from 'components/templates'
import React from 'react'

const UtilityPage = () => (
  <PageTemplate header={<Navbar />} footer={<Footer />}>
    <Banner image="/images/utilityBanner.png" size="300px" />
    <HorizontalRule />
    <AppList
      apps={[
        { src: '/images/gameOfLife.png', route: 'gameOfLife' },
        { src: '/images/markdown.png', route: 'markdown' },
        { src: '/images/simon.png', route: 'simon' },
      ]}
    />
  </PageTemplate>
)

export default UtilityPage
