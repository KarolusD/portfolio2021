import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  /* #projects, #about-me, #contact {
    scroll-margin-top: 10rem;
  } */


  h1 {
    margin: 0.8rem 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    ::selection { background: #5E97EC }
  }

  body {
    /* @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,800&display=swap&subset=latin-ext'); */
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #___gatsby {
    overflow-x: hidden;
  }
`

export default GlobalStyle
