import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../components/Button/Button'
import { BigH1, H2, P } from '../components/Typography/Typography'

const HeroTemplate = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
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
      </HeroContent>
      <ScrollDown>
        <ScrollIndicator />
        <ScrollLabel>scroll down</ScrollLabel>
      </ScrollDown>
    </HeroSection>
  )
}

export default HeroTemplate

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
`

const HeroContent = styled.div`
  top: 20%;
  position: relative;
  z-index: 1;
`

const HeroHeading = styled(BigH1)`
  max-width: 80rem;
  margin-bottom: 4rem;
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
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
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
    animation-iteration-count: 4;
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
