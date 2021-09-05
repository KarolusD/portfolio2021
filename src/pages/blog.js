import Layout from 'components/Layout/Layout'
import Section from 'components/Section/Section'
import Seo from 'components/Seo/Seo'
import { H1 } from 'components/Typography/Typography'
import * as React from 'react'
import styled from 'styled-components'

const BlogPage = () => {
  return (
    <Layout>
      <Seo title="blog" />
      <BlogSection id="blog">
        <H1>Blog will be available soon!</H1>
      </BlogSection>
    </Layout>
  )
}

export default BlogPage

const BlogSection = styled(Section)`
  min-height: 100vh;
`
