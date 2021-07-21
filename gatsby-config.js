module.exports = {
  siteMetadata: {
    siteUrl: 'https://podzerek.pl/',
    defaultTitle: 'Portfolio2021',
    defaultDescription: 'My personal portfolio & blog website',
    defaultImage: './src/images/site.png',
    author: 'Karol Podzerek',
    keywords: [
      'Software Engineer',
      'Web Developer',
      'Consultant',
      'Freelancer',
      'Designer',
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'A learning, teaching and dancing software engineer',
        short_name: 'KarolusDev',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#FF9966',
        display: 'standalone',
        icon: './src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
