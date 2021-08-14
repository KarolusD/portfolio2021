import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../components/Button/Button'
import { BigH1, H2, P } from '../components/Typography/Typography'
import { useScrollHiding } from '../hooks/useScrollHiding'
import { useThemeContext } from '../hooks/useThemeContext'

const HeroTemplate = () => {
  const scrollDownRef = React.useRef(null)
  useScrollHiding(scrollDownRef)

  const { isDark } = useThemeContext()

  const data = useStaticQuery(query)

  const HERO_IMAGES = data.allFile.edges

  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroArticle>
          <HeroHeading>
            Code with <br />
            design in mind
          </HeroHeading>
          <HeroParagraph>Hello there, I am</HeroParagraph>
          <HeroSubheading>Frontend developer & UI/UX designer</HeroSubheading>

          <HeroCTA>
            <Button primary>see my work</Button>
            <Button>read my blog</Button>
          </HeroCTA>
        </HeroArticle>
        <HeroAside>
          <HeroImage
            image={getImage(
              isDark
                ? HERO_IMAGES[0].node.childImageSharp
                : HERO_IMAGES[1].node.childImageSharp
            )}
            alt="user interface isometric illustration"
          />
        </HeroAside>
      </HeroContent>
      <ScrollDown ref={scrollDownRef}>
        <ScrollIndicator />
        <ScrollLabel>scroll down</ScrollLabel>
      </ScrollDown>
    </HeroSection>
  )
}

export default HeroTemplate

const HeroSection = styled.section`
  height: auto;
  min-height: 100vh;
  width: 100%;
  max-width: 120rem;
  padding-top: 8rem;
  /* position: relative; */

  ${({ theme }) => theme.mq.huge} {
    max-width: 160rem;
  }
`

const HeroContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  top: 12%;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }
`

const HeroArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: -16rem;
  width: 100%;
  max-width: 64rem;

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 0;
  }
`

const HeroAside = styled.aside`
  position: relative;
  width: 100%;
  height: auto;
`

const HeroImage = styled(GatsbyImage)`
  position: relative;
  left: 50%;
  top: 0;
  max-width: 48rem;
  z-index: -1;
  transform: translateX(-50%);

  ${({ theme }) => theme.mq.desktop} {
    max-width: 80rem;
    left: -8rem;
    top: 8rem;
    transform: none;
  }

  ${({ theme }) => theme.mq.huge} {
    max-width: 88rem;
  }
`

const HeroHeading = styled(BigH1)`
  max-width: 80rem;
  margin-bottom: 4rem;
  white-space: nowrap;
`

const HeroSubheading = styled(H2)`
  font-size: 2.4rem;
  margin: 0.4rem 0;
`

const HeroParagraph = styled(P)`
  color: ${({ theme }) => theme.darkGray};
`

const HeroCTA = styled.div`
  display: flex;
  margin-top: 0.8rem;
  flex-direction: column;

  & > :first-child {
    margin-left: 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`

const ScrollDown = styled.div`
  align-items: center;
  bottom: 1.2rem;
  display: none;
  flex-direction: column;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transition: opacity 200ms ease;

  &.hidden {
    opacity: 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`

const ScrollLabel = styled(P)`
  color: ${({ theme }) => theme.darkGray};
  font-size: ${({ theme }) => theme.font.size.body2};
  margin-top: 1.2rem;
`

const ScrollIndicator = styled.div`
  position: relative;
  height: 8rem;
  width: 0.4rem;
  border-radius: 0.2rem;
  overflow: hidden;

  &::before {
    animation-name: ${() => scrollAnimation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    background: ${({ theme }) =>
      `linear-gradient(to bottom, transparent 10%, ${theme.darkGray})`};
    border-radius: 0.2rem;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Bubble = styled.div`
  background: ${({ theme }) =>
    theme.mode === 'light'
      ? 'radial-gradient(50% 50% at 33.3% 33.3%, #FFFFFF 0%, #F4FAFD 50%, #D5E7F1 100%)'
      : 'radial-gradient(50% 50% at 33% 33.3%, #161E28 0%, #10161D 50%, #080C12 100%)'};
  border-radius: ${({ size }) => size};
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transition: all 800ms ease;
`

const scrollAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-8rem);
  }

  70% {
    opacity: 1;
    transform: translateY(0px);
  }

  100% {
    opacity: 0;
  }
`

const query = graphql`
  query MyQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "main" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(placeholder: NONE)
          }
        }
      }
    }
  }
`
