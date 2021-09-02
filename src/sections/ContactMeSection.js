import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import Copy from 'assets/svg/copy.svg'
import Button from 'components/Button/Button'
import Section from 'components/Section/Section'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import { H1, P } from 'components/Typography/Typography'
import { useThemeContext } from 'hooks/useThemeContext'
import { useClickToCopy } from 'hooks/useClickToCopy'

const EMAIL = 'kpodzerek@gmail.com'

const ContactMeTemplate = () => {
  const { isDark } = useThemeContext()

  const copiedInfoTextRef = React.useRef(null)
  const [copiedText, copyText] = useClickToCopy({
    textToCopy: EMAIL,
    copiedInfoTextRef,
  })

  const data = useStaticQuery(query)

  const CONTACT_IMAGES = data.allFile.edges[0].node

  const {
    childMdx: {
      frontmatter: { imageLight, imageDark },
    },
  } = CONTACT_IMAGES

  return (
    <Section id="contact">
      <SectionTitle content="Contact me">Contact me</SectionTitle>
      <ContactMeWrapper>
        <ContactAside>
          <ContactImage
            image={getImage(isDark ? imageDark : imageLight)}
            alt="user interface isometric illustration"
          />
        </ContactAside>
        <ContactInfo>
          <ContactHeading>Interested in working together?</ContactHeading>
          <ContactParagraph>
            <span className="bold">Let’s chat!</span>
            If you have any questions I would be more than happy to answer them.
            If you are amazed by my work I would be more than grateful to
            discuss further. If you are interested in hiring me I would be more
            than glad to meet with you.
          </ContactParagraph>
          <Email primary onClick={copyText}>
            {EMAIL}
            <Copy />
            <Copied ref={copiedInfoTextRef}>Copied!</Copied>
          </Email>
        </ContactInfo>
      </ContactMeWrapper>
    </Section>
  )
}

export default ContactMeTemplate

const query = graphql`
  query ContactImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "contact" }
        extension: { regex: "/(md)|(mdx)/" }
      }
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
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
const ContactMeWrapper = styled.div`
  align-items: center;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  max-width: 120rem;
  padding: 0.8rem;
  position: relative;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ContactImage = styled(GatsbyImage)`
  position: relative;
  left: 50%;
  top: 0;
  max-width: 48rem;
  transform: translateX(-50%);

  ${({ theme }) => theme.mq.desktop} {
    max-width: 88rem;
  }
`

const ContactInfo = styled.article`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 2.4rem;
  width: 100%;
  margin-top: -4.8rem;

  ${({ theme }) => theme.mq.tablet} {
    margin-left: 4.8rem;
    margin-top: 0;
  }
`

const ContactAside = styled.aside`
  position: relative;
  width: 100%;
  height: auto;
`

const ContactHeading = styled(H1)`
  font-size: ${({ theme }) => theme.font.size.h5};
  margin-bottom: 2.4rem;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.h2};
  }
`

const ContactParagraph = styled(P)`
  color: ${({ theme }) => theme.darkGray};
  font-size: ${({ theme }) => theme.font.size.body};
  margin-bottom: 2.4rem;
  width: 100%;

  & span.bold {
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
  }

  & span {
    display: block;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
  }
`

const Email = styled(Button)`
  align-items: center;
  box-shadow: none;
  border: none;
  border-radius: 3.6rem;
  color: ${({ theme }) => theme.brandGreen};
  cursor: pointer;
  display: flex;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  justify-content: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  position: relative;
  width: 100%;
  margin: 0;

  &::before {
    background-color: ${({ theme }) => theme.transparentBrandGreen};
  }

  &::after {
    border-color: transparent;
  }

  &:hover::after {
    border-color: ${({ theme }) => theme.brandGreen};
  }

  & > svg {
    margin-left: 1.6rem;
    path {
      stroke: ${({ theme }) => theme.brandGreen};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
  }
`

const Copied = styled.span`
  position: absolute;
  left: calc(100% + 0.8rem);
  top: 50%;
  color: ${(theme) => theme.brandGreen};
  opacity: 0;
  transition: opacity 300ms ease;
  transform: translateY(-50%);

  &.visible {
    opacity: 1;
  }
`
