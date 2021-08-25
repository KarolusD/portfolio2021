import * as React from 'react'
import Layout from 'components/Layout/Layout'
import HeroSection from 'sections/HeroSection'
import ProjectsSection from 'sections/ProjectsSection'
import AboutMeSection from 'sections/AboutMeSection'
import MyExpertiseSection from 'sections/MyExpertiseSection'
import ContactMeSection from 'sections/ContactMeSection'
import Seo from '../components/Seo/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
      <MyExpertiseSection />
      <ContactMeSection />
    </Layout>
  )
}

export default IndexPage
