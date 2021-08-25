import * as React from 'react'
import { useWindowSize } from './useWindowSize'

const mobileResolution = 1200

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [windowSize] = useWindowSize()

  const { windowWidth } = windowSize

  const toggleMobileMenu = () => {
    // this will make sure that closing works only on mobile devices
    if (windowWidth < mobileResolution) {
      setIsMenuOpen((prevState) => !prevState)
    }
  }

  React.useEffect(() => {
    if (windowWidth >= mobileResolution && !isMenuOpen) {
      setIsMenuOpen(true)
    } else if (windowWidth < mobileResolution && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [windowWidth])

  return { isMenuOpen, setIsMenuOpen, toggleMobileMenu }
}
