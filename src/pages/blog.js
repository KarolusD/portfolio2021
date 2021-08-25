import * as React from 'react'
import { H1 } from 'components/Typography/Typography'
import Layout from 'components/Layout/Layout'
import Seo from 'components/Seo/Seo'
import Section from 'components/Section/Section'

const BlogPage = () => {
  return (
    <Layout>
      <Seo title="blog" />
      <Section id="blog">
        <H1>Tu bedzie blog!</H1>
      </Section>
    </Layout>
  )
}

export default BlogPage
