import {
  FeatureList,
  Footer,
  Hero,
  Navbar,
  ProjectHeader,
} from '~/components/organisms'
import { PageTemplate } from '~/components/templates'
import { connectRedux } from '~/store'
import React, { Component } from 'react'

class PortfolioPage extends Component {
  render() {
    return (
      <PageTemplate header={<Navbar />} hero={<Hero />} footer={<Footer />}>
        <ProjectHeader
          id="tradeshowApp"
          image="/static/images/tradeshow.png"
          header="A fullstack MERN project built to help trade show teams consolidate their efforts and collaborate in real time..."
          text="View my Fullstack Tradeshow App"
          href="https://aoatradeshow.herokuapp.com"
          background
        />
        <ProjectHeader
          id="utilityApps"
          image="/static/images/gameOfLife.png"
          header="A cool collection consisting of simple game projects and utilities like a Markdown previewer..."
          text="View my Gaming & Utility Projects"
          href="utilityApps"
          flip
        />
        <ProjectHeader
          id="apiApps"
          image="/static/images/weather.png"
          header="An interesting group of API projects that span from a  Pinterest recipe box to syndicating the coolest channels on Twitch..."
          text="View my API Projects"
          href="apiApps"
          background
        />
        <ProjectHeader
          id="d3Apps"
          image="/static/images/force.png"
          header="A dynamic collection of D3 projects implementing cutting edge data visualization technology..."
          text="View my D3 Projects"
          href="d3Apps"
          flip
        />
        <FeatureList />
      </PageTemplate>
    )
  }
}

const mapStateToProps = state => ({ isOpen: state.isOpen })

export default connectRedux(mapStateToProps)(PortfolioPage)
