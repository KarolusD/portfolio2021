import * as React from 'react'
import { H2, H3, P } from 'components/Typography/Typography'
import styled from 'styled-components'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import Section from 'components/Section/Section'

const AboutMeTemplate = () => {
  return (
    <Section id="about-me">
      <SectionTitle content="Get to know me">Get to know me</SectionTitle>
      <AboutMeWrapper>
        <AboutMeAside>
          <AsideHeading>
            <span className="green">D</span>eveloper
            <br />
            <span className="blue">D</span>esigner
            <br />
            <span className="orange">D</span>ancer
          </AsideHeading>
        </AboutMeAside>

        <AboutMeArticle>
          <ArticleHeader>
            <ArticleHeading>Hello, I'm Charles</ArticleHeading>
            <Status>
              <span className="circle">&#8226;</span>Available for work
            </Status>
          </ArticleHeader>
          <ArticleText>
            Qui laboris elit consequat et ipsum ad et proident. Laborum
            voluptate nulla excepteur tempor esse magna eiusmod id enim labore
            ullamco et nostrud. Culpa dolor labore enim consectetur cupidatat
            dolor laborum ad ullamco consequat elit proident elit. Ipsum magna
            nostrud consectetur elit eiusmod minim sit nisi quis.
          </ArticleText>
        </AboutMeArticle>
      </AboutMeWrapper>
    </Section>
  )
}

export default AboutMeTemplate

const AboutMeWrapper = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    /* margin-top: 20rem; */
  }
`

const AboutMeAside = styled.aside``

const AsideHeading = styled(H2)`
  font-size: 10vw;
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  margin-bottom: 4rem;
  text-align: center;

  & .green {
    color: ${({ theme }) => theme.brandGreen};
  }

  & .blue {
    color: ${({ theme }) => theme.brandBlue};
  }

  & .orange {
    color: ${({ theme }) => theme.brandOrange};
  }

  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
    font-size: ${({ theme }) => theme.font.size.h1};
    margin-right: 12rem;
    margin-bottom: 0;
  }
`

const AboutMeArticle = styled.article`
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.almostBg};
  padding: 4rem 3.2rem;
  transition: background-color ${({ theme }) => theme.themeTransition};
  position: relative;

  &::after {
    position: absolute;
    bottom: -3rem;
    left: calc(100% - 6rem);
    content: '„';
    color: ${({ theme }) => theme.gray};
    font-size: 16rem;
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    z-index: 1;
  }
`

const ArticleHeader = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`

const ArticleHeading = styled(H3)`
  font-size: ${({ theme }) => theme.font.size.h6};
  position: relative;
  margin-right: 1.6rem;
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.h5};
  }
`

const Status = styled(P)`
  font-size: ${({ theme }) => theme.font.size.body2};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  position: relative;

  & .circle {
    color: ${({ theme }) => theme.brandGreen};
    font-size: ${({ theme }) => theme.font.size.h4};
    position: absolute;
    top: -0.2rem;
    left: -1.6rem;
  }
`

const ArticleText = styled(P)`
  color: ${({ theme }) => theme.darkGray};
`
