import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(query)

  return site.siteMetadata
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        author
        defaultTitle
        defaultDescription
        defaultImage
        siteUrl
        keywords
      }
    }
  }
`
