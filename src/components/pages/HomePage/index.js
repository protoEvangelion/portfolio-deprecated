import React from 'react'

import { PageTemplate, Hero, Footer, FeatureList } from 'components'
import { Navbar } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate header={<Navbar />} hero={<Hero />} footer={<Footer />}>
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage
