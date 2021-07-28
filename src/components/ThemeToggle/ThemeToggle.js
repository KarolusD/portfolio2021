import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { P } from '../Typography/Typography'
import { useThemeContext } from '../../hooks/useThemeContext'

const ThemeToggle = () => {
  const { isDark, toggle } = useThemeContext()

  const handleToggleTheme = (event) => {
    event.stopPropagation()
    toggle()
  }

  return (
    <ToggleWrapper>
      <ToggleLightLabel isDark={isDark}>Light</ToggleLightLabel>
      <Switch onClick={handleToggleTheme}>
        <SwitchToggle isDark={isDark} />
      </Switch>
      <ToggleDarkLabel isDark={isDark}>Dark</ToggleDarkLabel>
    </ToggleWrapper>
  )
}

export default ThemeToggle

const ToggleWrapper = styled.div`
  display: none;
  flex-direction: row;
  position: fixed;
  right: 4.8rem;
  top: 50%;
  transform-origin: center right;
  transform: rotateZ(90deg);
  z-index: 99;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }
`

const Switch = styled.button`
  background-color: ${({ theme }) => theme.brandOrange};
  border-radius: 1.6rem;
  box-shadow: none;
  border: none;
  cursor: pointer;
  width: 8rem;
  height: 3.2rem;
  padding: 2px;
  margin: 0 2rem;
`

const SwitchToggle = styled.div`
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.black : theme.white};
  border-radius: 2rem;

  height: 100%;
  width: 4rem;

  animation: 300ms ease-in-out
    ${({ isDark }) => (isDark ? toggleDarkAnimation : toggleLightAnimation)};
  animation-fill-mode: both;
`

const ToggleLightLabel = styled(P)`
  color: ${({ theme, isDark }) =>
    isDark ? theme.darkGray : theme.brandOrange};
  font-weight: 600;
  text-align: right;
`

const ToggleDarkLabel = styled(P)`
  color: ${({ theme, isDark }) =>
    isDark ? theme.brandOrange : theme.darkGray};
  font-weight: 600;
  text-align: left;
`

const toggleDarkAnimation = keyframes`
  0% {
    transform: translateX(0)
  }

  30% {
    width: 5rem;
  }

  100% {
    transform: translateX(calc(100% - 0.4rem));
  }
`

const toggleLightAnimation = keyframes`
  0% {
      transform: translateX(calc(100% - 0.4rem))
    }

  70% {
    width: 5rem;
  }

  100% {
    transform: translateX(0)
  } 
`
