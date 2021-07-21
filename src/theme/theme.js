const lightTheme = {
  mode: 'light',
  bg: '#F4F7F9',
  white: '#FFFFFF',
  almostWhite: '#F5FCFF',
  lightGray: '#EBF2F7',
  gray: '#B1C8D6',
  darkGray: '#5E95B7',
  black: '#12181F',
  text: '#171F27',
  brandRed: '#FF5E62',
  brandOrange: '#FF9966',
  brandBlue: '#4790FF',
  transparentBrandRed: 'rgba(255, 94, 98, 0.15)',
  transparentBrandOrange: 'rgba(255, 153, 102, 0.15)',
  transparentBrandBlue: 'rgba(71, 144, 255, 0.15)',
  transparentGray: 'rgba(94, 149, 183, 0.15)',
  transition: '300ms cubic-bezier(0.25, 0.75, 0.5, 1.25)',
  themeTransition: '400ms ease-in-out',

  font: {
    family: {
      poppins: 'Poppins',
    },
    weight: {
      regular: '400',
      semibold: '600',
      extrabold: '800',
    },
    size: {
      h1: '7.2rem',
      h2: '5.6rem',
      h3: '4.8rem',
      h4: '3.2rem',
      body: '1.8rem',
      body2: '1.4rem',
      link: '1.8rem',
      button: '1.6rem',
    },
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    huge: '@media (min-width: 1920px)',
  },
}

const darkTheme = {
  // mapped variables from main theme called 'lightTheme'
  mode: 'dark',
  bg: lightTheme.black,
  white: lightTheme.black,
  almostWhite: lightTheme.darkGray,
  lightGray: lightTheme.gray,
  gray: lightTheme.lightGray,
  darkGray: lightTheme.gray,
  black: lightTheme.white,
  text: lightTheme.white,
  transparentBrandRed: lightTheme.transparentBrandRed,
  transparentBrandOrange: lightTheme.transparentBrandOrange,
  transparentBrandBlue: lightTheme.transparentBrandBlue,
  transparentGray: lightTheme.transparentGray,
  lightBrand: lightTheme.lightBrand,
  lightBrand3: lightTheme.lightBrand3,
  transition: lightTheme.transition,
  themeTransition: lightTheme.themeTransition,
  font: { ...lightTheme.font },
  mq: { ...lightTheme.mq },
}

export { lightTheme, darkTheme }
