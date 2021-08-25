import * as React from 'react'
import { throttle } from 'helpers/throttle'
import { useWindowSize } from './useWindowSize'

export const useActiveSection = ({ targets, offset }) => {
  const [activeSection, setActiveSection] = React.useState(null)
  const { windowWidth, windowHeight } = useWindowSize()

  const trackActiveSection = (allSections) => {
    let currScrollPos = window.scrollY
    allSections.find((section) => {
      if (
        currScrollPos >= section?.pos - offset &&
        currScrollPos < section?.pos + section?.height - offset &&
        activeSection?.name !== section?.name
      ) {
        setActiveSection(section)
        return true
      }
    })
  }

  React.useLayoutEffect(() => {
    let allSections = targets.map((target) => {
      const section = document.querySelector(`#${target}`)
      if (section) {
        return {
          name: section.id,
          selector: target,
          pos: section.offsetTop,
          height: section.offsetHeight,
        }
      }
    })

    // execute before scroll is initated
    allSections && trackActiveSection(allSections)

    const throttledTrackActiveSection = throttle(() => {
      trackActiveSection(allSections)
    }, 200)

    if (window) {
      window.addEventListener('scroll', throttledTrackActiveSection)
    }

    return () => {
      window.removeEventListener('scroll', throttledTrackActiveSection)
    }
  }, [targets, offset, windowWidth, windowHeight])

  return [activeSection, setActiveSection]
}
