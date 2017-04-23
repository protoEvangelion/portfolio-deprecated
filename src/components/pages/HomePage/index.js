import React from 'react'
import { PageTemplate, Hero, ProjectHeader, Footer, FeatureList } from 'components'
import { Navbar } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate header={<Navbar />} hero={<Hero />} footer={<Footer />}>
      <ProjectHeader
        id="APIProjects"
        header="A fun collection of API projects that span from building a  Pinterest recipe box to viewing the coolest channels on Twitch..."
        background
      />
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage
