import * as React from 'react'
import Layout from '../components/Layout/Layout'
import HeroTemplate from '../templates/HeroTemplate'
import ProjectsTemplate from '../templates/ProjectsTemplate'
import AboutMeTemplate from '../templates/AboutMeTemplate'
import MyExpertiseTemplate from '../templates/MyExpertiseTemplate'

const IndexPage = () => {
  return (
    <Layout>
      <HeroTemplate />
      <ProjectsTemplate />
      <AboutMeTemplate />
      <MyExpertiseTemplate />
    </Layout>
  )
}

export default IndexPage
