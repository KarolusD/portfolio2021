import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import Button from 'components/Button/Button'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import Section from 'components/Section/Section'
import { H2, H3, P } from 'components/Typography/Typography'
import { useThemeContext } from 'hooks/useThemeContext'

const ProjectsTemplate = () => {
  const { isDark } = useThemeContext()
  const data = useStaticQuery(query)

  const PROJECTS = data.allFile.edges

  const renderProjects = () => {
    return PROJECTS.map(({ node }, idx) => {
      const {
        childMdx: {
          frontmatter: {
            title,
            description,
            role,
            imageLight,
            imageDark,
            codeBase,
            liveDemo,
          },
        },
      } = node

      return (
        <Project key={title} idx={idx}>
          <ProjectContent idx={idx}>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectRole>{role}</ProjectRole>
            <ProjectDesc>{description}</ProjectDesc>
            <ProjectActions>
              {codeBase && (
                <Button
                  as="a"
                  href={codeBase}
                  target="_blank"
                  primary
                  rel="noreferrer noopener"
                >
                  see code
                </Button>
              )}
              {liveDemo && (
                <Button
                  as="a"
                  href={liveDemo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  live preview
                </Button>
              )}
            </ProjectActions>
          </ProjectContent>
          <ProjectImage
            image={getImage(isDark ? imageDark : imageLight)}
            alt={title}
          />
        </Project>
      )
    })
  }

  return (
    <Section id="projects">
      <SectionTitle content="Recent projects">Recent projects</SectionTitle>
      {renderProjects()}
    </Section>
  )
}

export default ProjectsTemplate

const query = graphql`
  query PROJECTS {
    allFile(
      filter: {
        sourceInstanceName: { eq: "projects" }
        extension: { regex: "/(md)|(mdx)/" }
      }
      sort: { fields: relativeDirectory, order: ASC }
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
              description
              role
              codeBase
              liveDemo
              imageLight {
                childImageSharp {
                  gatsbyImageData(placeholder: NONE)
                }
              }
              imageDark {
                childImageSharp {
                  gatsbyImageData(placeholder: NONE)
                }
              }
            }
          }
        }
      }
    }
  }
`

const Project = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  height: auto;
  width: 100%;
  max-width: 160rem;
  margin-bottom: 16rem;
  padding: 8rem 0;

  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 0;
    min-height: ${({ idx }) => (idx % 2 === 0 ? '60vh' : '80vh')};
    flex-direction: ${({ idx }) => (idx % 2 === 0 ? 'row-reverse' : 'row')};
  }
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;

  ${({ theme }) => theme.mq.desktop} {
    margin: ${({ idx }) => (idx % 2 === 0 ? '0 0 0 8rem' : '0 8rem 0 0')};
    margin-top: 0;
  }
`

const ProjectTitle = styled(H2)`
  font-size: ${({ theme }) => theme.font.size.h4};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
`

const ProjectRole = styled(H3)`
  color: ${({ theme }) => theme.brandGreen};
  font-size: ${({ theme }) => theme.font.size.body};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-bottom: 0.8rem;
`

const ProjectDesc = styled(P)`
  color: ${({ theme }) => theme.darkGray};
  max-width: 64rem;
`

const ProjectImage = styled(GatsbyImage)`
  max-width: 72rem;
`

const ProjectActions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`
