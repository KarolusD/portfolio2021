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
        "Every project that I've made started from learning about the industry, clients expecations and users needs. To prepare a really good and user friendly interface you have to know what is important for business and users.",
      emphasis: 'Understand first.',
    },
    {
      icon: <Layout />,
      title: 'UI/UX design',
      description:
        'I always take care about user experience and user interface. I am working with typography, colours & layout on daily basis, so believe me everything is always well preapred with attention to details.',
      emphasis: 'Every pixel matter.',
    },
    {
      icon: <Code />,
      title: 'Development',
      description:
        'When it comes to the development phase I am really focused to make sure that the actual implementation is consistent with the design and that the code is well written and optimized.',
      emphasis: 'Bring work to life.',
    },
    {
      icon: <Layers />,
      title: 'Motion & animation',
      description:
        'Nice page transitions and smaller interactions help to build solid brand image and make the whole experience better that users would love to stay on your website a little bit longer.',
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
