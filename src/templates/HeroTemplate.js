import * as React from 'react'
import styled from 'styled-components'
import { BigH1, H2, P } from '../components/Typography/Typography'
import Button from '../components/Button/Button'

const HeroTemplate = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroHeading>
          Code with <br />
          design in mind
        </HeroHeading>
        <HeroParagraph>Hello there, I am</HeroParagraph>
        <HeroSubheading>Frontend developer & UI/UX designer</HeroSubheading>
        <HeroCTA primary>See my work</HeroCTA>
      </HeroContent>
    </HeroSection>
  )
}

export default HeroTemplate

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1000px;
  width: 100%;
  max-width: 1200px;
`

const HeroContent = styled.div`
  margin-top: 16vh;
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

const HeroCTA = styled(Button)`
  margin-top: 1.2rem;
  background-color: ${({ theme }) => theme.brandRed};
  color: ${({ theme }) => theme.white};
  position: relative;
  transition: transform 200ms ease;

  &::before {
    background-color: ${({ theme }) => theme.transparentBrandRed};
    border-radius: 2.4rem;
    content: '';
    position: absolute;
    top: 0.6rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 200ms ease;
  }

  &:hover {
    transform: scale(1.1);
    &::before {
      transform: translateY(0.8rem) scale(0.9);
    }
  }

  &:active {
    transform: translateY(0.4rem) scale(1);
    &::before {
      transform: translateY(-0.4rem) scale(1);
    }
  }
`
