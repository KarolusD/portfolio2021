import * as React from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useThemeContext = () => {
  const { isDark, toggle, enable, disable } = React.useContext(ThemeContext)
  return { isDark, toggle, enable, disable }
}
