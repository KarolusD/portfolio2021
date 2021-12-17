import Logo from 'assets/svg/logo.svg'
import { useMenu } from 'hooks/useMenu'
import * as React from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger/Hamburger'
import Menu from './Menu/Menu'
import Social from './Social/Social'

const Header = () => {
  const { isMenuOpen, toggleMobileMenu } = useMenu()

  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <HeaderLogo />
        <Menu isMenuOpen={isMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        <Hamburger
          isMenuOpen={isMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        <Social />
      </HeaderInnerWrapper>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  align-items: flex-start;
  background: ${({ theme }) => theme.transparentBg};
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  justify-content: center;
  height: 80px;
  left: 0;
  top: 0;
  padding: 0 3.2rem;
  position: fixed;
  width: 100vw;
  transition: ${({ theme }) => theme.themeTransition};
  z-index: 1000;
`

const HeaderInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 240rem;
`

const HeaderLogo = styled(Logo)`
  & > path {
    fill: ${({ theme }) => theme.text};
    transition: fiil 200ms ease;
  }
`
