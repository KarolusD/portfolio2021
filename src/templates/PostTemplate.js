import Layout from 'components/Layout/Layout'
import Seo from 'components/Seo/Seo'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import styled from 'styled-components'
import { H1 } from 'components/Typography/Typography'

const PostTemplate = ({ data, pageContext }) => {
  console.log(data, pageContext)
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <Seo />
      <PostWrapper>
        <h1>thats a post</h1>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>

        <ul>
          <li>
            {previous && (
              <Link to={`/blog${previous.frontmatter.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.frontmatter.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </PostWrapper>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date
      }
      body
    }
  }
`

const PostWrapper = styled.section`
  padding-top: 20rem;
  min-height: 100vh;
  max-width: 120rem;

  & > h1 {
    ${H1}
  }
`
