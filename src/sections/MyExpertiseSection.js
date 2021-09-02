import * as React from 'react'
import styled from 'styled-components'
import Code from 'assets/svg/code.svg'
import Layers from 'assets/svg/layers.svg'
import Layout from 'assets/svg/layout.svg'
import Message from 'assets/svg/message.svg'
import Section from 'components/Section/Section'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import { H2, P } from 'components/Typography/Typography'

const MyExpertiseTemplate = () => {
  const SKILLS = [
    {
      icon: <Message />,
      title: 'Research & direction',
      description:
        'Ut fugiat aliqua tempor commodo ipsum. Ad aute ad Lorem ex eiusmod ex deserunt tempor in proident. Sint commodo dolor aute do culpa velit et deserunt officia esse aliqua voluptate nisi laboris.',
      emphasis: 'Understand first.',
    },
    {
      icon: <Layout />,
      title: 'UI/UX design',
      description:
        'Ut fugiat aliqua tempor commodo ipsum. Ad aute ad Lorem ex eiusmod ex deserunt tempor in proident. Sint commodo dolor aute do culpa velit et deserunt officia esse aliqua voluptate nisi laboris.',
      emphasis: 'Every pixel matter.',
    },
    {
      icon: <Code />,
      title: 'Development',
      description:
        'Ut fugiat aliqua tempor commodo ipsum. Ad aute ad Lorem ex eiusmod ex deserunt tempor in proident. Sint commodo dolor aute do culpa velit et deserunt officia esse aliqua voluptate nisi laboris.',
      emphasis: 'Bring work to life.',
    },
    {
      icon: <Layers />,
      title: 'Motion & animation',
      description:
        'Ut fugiat aliqua tempor commodo ipsum. Ad aute ad Lorem ex eiusmod ex deserunt tempor in proident. Sint commodo dolor aute do culpa velit et deserunt officia esse aliqua voluptate nisi laboris.',
      emphasis: 'Show rather than tell.',
    },
  ]

  const renderSkills = () => {
    return SKILLS.map((skill) => {
      return (
        <Skill key={skill.title}>
          <Icon>{skill.icon}</Icon>
          <Content>
            <Title>{skill.title}</Title>
            <Description>
              <span>{skill.emphasis} </span>
              {skill.description}
            </Description>
          </Content>
        </Skill>
      )
    })
  }

  return (
    <Section id="my-expertise">
      <SectionTitle content="My expertise">My expertise</SectionTitle>
      <MyExpertiseWrapper>{renderSkills()}</MyExpertiseWrapper>
    </Section>
  )
}

export default MyExpertiseTemplate

const MyExpertiseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8rem;
  max-width: 120rem;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Skill = styled.div`
  box-sizing: border-box;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

const Icon = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.almostBg};
  border-radius: 2.8rem;
  display: flex;
  justify-content: center;
  height: 5.6rem;
  width: 5.6rem;
  position: relative;
  margin-right: 2rem;
  flex-shrink: 0;
  transition: background-color ${({ theme }) => theme.themeTransition};
  transition-duration: 400ms;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled(H2)`
  font-size: ${({ theme }) => theme.font.size.h5};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  margin: 0.8rem 0;
`

const Description = styled(P)`
  color: ${({ theme }) => theme.darkGray};

  & > span {
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  }
`
