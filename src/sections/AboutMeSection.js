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
            Those 3 words starting from letter D drives me to be creative and
            passionate about building things. Currently I am working as a UX/UI
            designer in software house. I have an experience in working with
            clients from different industries. I colaborate with people of
            variety profession, from developers, through martketing, till
            salesmans and business. From the very beginning I wanted to create
            things from A to Z that's why I am also passionate about
            programming, espiecailly the frontend side which really corelates
            with my day-to-day job. If you would like to create website from
            scratch with a good user experience and outstanding layout I am the
            person you should contact with.
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
