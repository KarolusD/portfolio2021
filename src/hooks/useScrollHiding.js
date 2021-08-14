import * as React from 'react'

export const useScrollHiding = (scrollDownRef) => {
  React.useEffect(() => {
    const scrollTracking = () => {
      if (window && scrollDownRef) {
        if (window.scrollY > 0) {
          scrollDownRef.current.classList.add('hidden')
        } else {
          scrollDownRef.current.classList.remove('hidden')
        }
      }
    }
    window.addEventListener('scroll', scrollTracking)

    // return () => {
    //   if (!elemRef) {
    //     window.removeEventListener('scroll', scrollTracking)
    //   }
    // }
  }, [])
}
