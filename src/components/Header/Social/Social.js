import * as React from 'react'
import styled from 'styled-components'
import GithubIcon from 'assets/svg/github.svg'
import LinkedinIcon from 'assets/svg/linkedin.svg'
import EmailIcon from 'assets/svg/email.svg'

const Social = () => {
  return (
    <SocialWrapper>
      <Link
        href="https://github.com/karolusd"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GithubIcon />
      </Link>
      <Link
        href="https://pl.linkedin.com/in/karol-podzerek"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkedinIcon />
      </Link>
      <Link href="mailto:kpodzerek@gmail.com">
        <EmailIcon />
      </Link>
    </SocialWrapper>
  )
}

export default Social

const SocialWrapper = styled.div`
  display: none;
  flex-direction: row;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`

const Link = styled.a`
  align-items: center;
  border-radius: 50%;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  margin: 0 0.8rem;
  height: 6.4rem;
  text-decoration: none;
  position: relative;
  width: 6.4rem;
  overflow: hidden;

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.transparentBrandBlue};
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    transition: 150ms ease-in-out;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.brandBlue};
    outline: none;
    &::before {
      top: 0.6rem;
      left: 0.6rem;
      width: calc(100% - 1.2rem);
      height: calc(100% - 1.2rem);
    }
  }
`
