import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Seo from '../Seo/Seo'
import GlobalStyle from '../../theme/GlobalStyle'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { ThemeToggleProvider } from '../../context/ThemeContext'
import Header from '../Header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <ThemeToggleProvider>
        <AppWrapper>
          <Header />
          <ThemeToggle />
          {children}
          {/* <Header
            setTheme={setTheme}
            setIsLight={setIsLight}
            isLight={isLight}
          /> */}
        </AppWrapper>
      </ThemeToggleProvider>
    </>
  )
}

export default Layout

const AppWrapper = styled.main`
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100vw;
  padding: 0 3.2rem;
  transition: background ${({ theme }) => theme.themeTransition};
`
