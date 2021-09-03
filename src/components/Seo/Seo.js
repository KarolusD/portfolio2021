import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import siteImage from 'assets/images/site.png'

const Seo = ({ title, description, image, article, slug }) => {
  const { defaultDescription, defaultTitle, defaultImage, siteUrl } =
    useSiteMetadata()

  const seoData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || siteImage,
    url: article ? `${siteUrl}/blog${slug}` : `${siteUrl}`,
  }

  return (
    <Helmet title={seoData.title}>
      <meta name="description" content={seoData.description} />
      <meta name="image" content={seoData.image} />
      {seoData.url && <meta property="og:url" content={seoData.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seoData.title && <meta property="og:title" content={seoData.title} />}
      {seoData.description && (
        <meta property="og:description" content={seoData.description} />
      )}
      {seoData.image && <meta property="og:image" content={seoData.image} />}
    </Helmet>
  )
}
export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  slug: PropTypes.string,
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  slug: null,
}
