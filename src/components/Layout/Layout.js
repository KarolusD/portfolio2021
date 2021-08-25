import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Seo from '../Seo/Seo'
import GlobalStyle from 'theme/GlobalStyle'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { ThemeToggleProvider } from 'context/ThemeContext'
import Header from '../Header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeToggleProvider>
        <AppWrapper className="app-wrapper">
          <Header />
          <ThemeToggle className="desktop" />
          {children}
          <Footer>
            <p>
              All rights reserved © Karol Podżerek {new Date().getFullYear()}
            </p>
          </Footer>
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

const Footer = styled.footer`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  padding: 0 3.2rem;
  width: 100vw;
`
