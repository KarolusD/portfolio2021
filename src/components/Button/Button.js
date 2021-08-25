import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = ({ children, primary, ...props }) => {
  return (
    <ButtonWrapper>
      <InnerButton $primary={primary} {...props}>
        {children}
      </InnerButton>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const InnerButton = styled.button`
  align-items: center;
  box-sizing: border-box !important;
  /* border: 1px solid
    ${({ theme, primary }) => (primary ? theme.brandGreen : theme.gray)}; */
  border: none;
  background: none;
  box-shadow: none;
  border-radius: 3.2rem;
  color: ${({ theme, $primary }) => ($primary ? theme.bg : theme.text)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 6.4rem;
  margin: 0.8rem 0;
  padding: 0.8rem 4rem;
  position: relative;
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  text-decoration: none;
  transition: color 150ms ease-in-out;
  width: 100%;

  &::after {
    border: 1px solid
      ${({ theme, $primary }) => ($primary ? theme.brandGreen : theme.gray)};
    content: '';
    border-radius: 3.2rem;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transition: all 150ms ease-in-out;
    width: 100%;
    z-index: -1;
  }

  &::before {
    background-color: ${({ theme, $primary }) =>
      $primary ? theme.brandGreen : 'transparent'};
    border-radius: 3.2rem;
    content: '';
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transition: all 150ms ease-in-out;
    width: 100%;
    z-index: -1;
  }

  &:hover,
  &:focus {
    outline: none;
    color: ${({ theme, $primary }) =>
      $primary ? theme.brandGreen : theme.text};
    &::before {
      background-color: ${({ theme, $primary }) =>
        $primary ? theme.transparentBrandGreen : theme.transparentGray};
      top: 0.6rem;
      left: 0.6rem;
      width: calc(100% - 1.2rem);
      height: calc(100% - 1.2rem);
    }
  }

  &:active {
    &::before {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 0.8rem;
    width: auto;
  }
`

export default Button
