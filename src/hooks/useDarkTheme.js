import * as React from 'react'
import { useLocalStorage } from './useLocalStorage'
// color preferences
const COLOR_SCHEME_QUERY = '(prefers-color-scheme:dark)'

export const useDarkTheme = (initialState) => {
  const getPrefersScheme = () => {
    // Prevent SSR issues
    if (window) {
      return window.matchMedia(COLOR_SCHEME_QUERY).matches
    }
    return !!initialState
  }

  const [isDark, setDarkMode] = useLocalStorage('darkMode', getPrefersScheme)

  React.useEffect(() => {
    const handler = () => setDarkMode(getPrefersScheme)
    const matchMedia = window.matchMedia(COLOR_SCHEME_QUERY)

    matchMedia.addEventListener('change', handler)
    return () => {
      matchMedia.removeEventListener('change', handler)
    }
  }, [])

  return {
    isDark,
    toggle: () => setDarkMode((prev) => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  }
}
