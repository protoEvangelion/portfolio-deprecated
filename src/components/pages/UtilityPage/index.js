import React from 'react'
import { PageTemplate, Banner, HorizontalRule, AppList, Footer } from 'components'
import { Navbar } from 'containers'
import utilityBanner from '../../../../public/banners/utilityBanner.png'
import gameOfLife from '../../../../public/projectimages/gameOfLife.png'
import markdown from '../../../../public/projectimages/markdown.png'
import simon from '../../../../public/projectimages/simon.png'

const UtilityPage = () => (
  <PageTemplate header={<Navbar />} footer={<Footer />}>
    <Banner image={utilityBanner} size="300px" />
    <HorizontalRule />
    <AppList
      apps={[
        { src: gameOfLife, route: 'gameOfLife' },
        { src: markdown, route: 'markdown' },
        { src: simon, route: 'simon' },
      ]}
    />
  </PageTemplate>
)

export default UtilityPage
