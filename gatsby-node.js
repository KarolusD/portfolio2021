const path = require(`path`)
const fs = require(`fs`).promises
const childProcess = require(`child_process`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const postTemplate = path.resolve(`./src/templates/PostTemplate.js`)

const query = `
  {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

exports.createPages = async ({ graphql, actions }) => {
  const response = await graphql(query)
  if (response.errors) throw new Error(response.errors)

  const posts = response.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const { slug } = post.node.frontmatter

    actions.createPage({
      path: `/blog${slug}`,
      component: postTemplate,
      context: { slug, previous, next },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#absolute-imports
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

// Works on macOS only. Should do nothing on other platforms.
const notify = (title, text) =>
  `osascript -e 'display notification "${text}" ` +
  `with title "${title}" sound name "default"'`

exports.onCreateDevServer = () => {
  const cmd = notify(`Done!`, `gatsby developed finished`)
  childProcess.exec(cmd)
}

exports.onPostBuild = () => {
  const cmd = notify(`Done!`, `gatsby build finished`)
  childProcess.exec(cmd)
}
