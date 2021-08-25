// menu have to be represented as what is called hamburger icon on mobile devices
// on dekstop in will shown as list of elements but when window size get smaller it should hide behind hamburger icon
// to keep track of window size we will write custom react hooks which returns window width and height
import * as React from 'react'

export const useWindowSize = () => {
  // react custom hooks have to start with "use" keyword
  // lets keep track of variable inside useState react hook
  const [windowSize, setWindowSize] = React.useState({
    windowWidth: null,
    windowHeight: null,
  })
  // lets write function that is executed when window resolution is changing
  const resizing = () => {
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  }

  React.useEffect(() => {
    if (window) {
      resizing()
      window.addEventListener('resize', resizing)
    }

    return () => {
      window.removeEventListener('resize', resizing) // when component unmounts listener is removed
    }
  }, []) // executes only when component mounts

  return [windowSize, setWindowSize]
}
