import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { P } from '../Typography/Typography'
import { useThemeContext } from 'hooks/useThemeContext'

const ThemeToggle = ({ ...props }) => {
  const { isDark, toggle } = useThemeContext()
  const toggleRef = React.useRef(null)

  const handleToggleTheme = (event) => {
    event.stopPropagation()
    toggle()
  }

  return (
    <ToggleWrapper {...props}>
      <ToggleLightLabel isDark={isDark}>Light</ToggleLightLabel>
      <Switch onClick={handleToggleTheme}>
        <SwitchToggle className="toggle" ref={toggleRef} isDark={isDark} />
      </Switch>
      <ToggleDarkLabel isDark={isDark}>Dark</ToggleDarkLabel>
    </ToggleWrapper>
  )
}

export default ThemeToggle

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: calc(100% - 10rem);
  right: 50%;
  transform: translateX(50%);

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }

  &.desktop {
    display: none;
    ${({ theme }) => theme.mq.desktop} {
      display: flex;
      position: fixed;
      right: 4.8rem;
      top: 50%;
      transform-origin: center right;
      transform: rotateZ(90deg);
      z-index: 99;
    }
  }
`

const Switch = styled.button`
  background-color: ${({ theme }) => theme.brandOrange};
  border-radius: 1.6rem;
  border: none;
  box-shadow: none;
  cursor: pointer;
  width: 7.2rem;
  height: 3.2rem;
  padding: 2px;
  margin: 0 2rem;
  position: relative;
`

const SwitchToggle = styled.div`
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.black : theme.white};
  border-radius: 2rem;

  height: 100%;
  width: 4rem;

  transform: ${({ isDark }) =>
    isDark ? 'translateX(calc(100% - 1.2rem))' : 'translateX(0)'};
  transition: transform 200ms ease-out;
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
