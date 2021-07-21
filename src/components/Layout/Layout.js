import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Seo from '../Seo/Seo'
import GlobalStyle from '../../theme/GlobalStyle'
import { lightTheme } from '../../theme/theme'

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState(lightTheme)
  const [isLight, setIsLight] = React.useState(true)

  return (
    <>
      <Seo />
      <GlobalStyle />
      <ThemeProvider theme={theme} isLight={isLight}>
        <AppWrapper>
          {children}
          {/* <Header
            setTheme={setTheme}
            setIsLight={setIsLight}
            isLight={isLight}
          /> */}
        </AppWrapper>
      </ThemeProvider>
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
