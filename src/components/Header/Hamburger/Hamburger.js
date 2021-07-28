import React from 'react'
import styled from 'styled-components'

const Hamburger = ({ isMenuOpen, toggleMobileMenu }) => {
  return (
    <HamburgerWrapper onClick={toggleMobileMenu}>
      <Onion isMenuOpen={isMenuOpen} />
      <Beef isMenuOpen={isMenuOpen} />
      <Tomato isMenuOpen={isMenuOpen} />
    </HamburgerWrapper>
  )
}

export default Hamburger

const HamburgerWrapper = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  width: 5.6rem;
  height: 5.6rem;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  padding: 0;
  margin: 0;
  transform: translate(16px, -8px);

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`

const InnerHamburger = styled.span`
  position: absolute;
  height: 3px;
  width: 24px;
  left: 16px;
  border-radius: 3px;
  background: ${({ theme }) => theme.brandBlue};
  transition: 200ms ease-in-out;
`

const Beef = styled(InnerHamburger)`
  top: 50%;
  width: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '24px')};
`

const Onion = styled(InnerHamburger)`
  top: calc(50% - 8px);
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? ' translateY(calc(50% + 8px)) rotate(-45deg) ' : ''};
  width: ${({ isMenuOpen }) => (isMenuOpen ? '24px' : '16px')};
`

const Tomato = styled(InnerHamburger)`
  top: calc(50% + 8px);
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? ' translateY(calc(50% - 8px)) rotate(45deg)' : ''};
  width: ${({ isMenuOpen }) => (isMenuOpen ? '24px' : '12px')};
`
