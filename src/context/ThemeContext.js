import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme/theme'
import { useDarkTheme } from '../hooks/useDarkTheme'

export const ThemeContext = React.createContext(null)

export const ThemeToggleProvider = ({ children }) => {
  const { isDark, toggle, enable, disable } = useDarkTheme(false)

  return (
    <ThemeContext.Provider value={{ isDark, toggle, enable, disable }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
