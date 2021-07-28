import * as React from 'react'
import Layout from '../components/Layout/Layout'
import HeroTemplate from '../templates/HeroTemplate'
import ProjectsTemplate from '../templates/ProjectsTemplate'

const IndexPage = () => {
  return (
    <Layout>
      <HeroTemplate />
      <ProjectsTemplate />
    </Layout>
  )
}

export default IndexPage
