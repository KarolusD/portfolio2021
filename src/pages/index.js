import Layout from 'components/Layout/Layout'
import Seo from 'components/Seo/Seo'
import * as React from 'react'
import AboutMeSection from 'sections/AboutMeSection'
import ContactMeSection from 'sections/ContactMeSection'
import HeroSection from 'sections/HeroSection'
import MyExpertiseSection from 'sections/MyExpertiseSection'
import ProjectsSection from 'sections/ProjectsSection'

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
