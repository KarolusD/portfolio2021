import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid transparent;
  background-color: ${({ theme, primary }) =>
    primary ? theme.transparentBrandRed : theme.transparentBrandBlue};
  box-shadow: none;
  border-radius: 2.8rem;
  color: ${({ theme, primary }) =>
    primary ? theme.brandRed : theme.brandBlue};
  cursor: pointer;
  height: 5.6rem;
  padding: 0.8rem 2.4rem;
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  transition: background-color 200ms ease-out, border 200ms ease-out;

  &:hover {
    border: 1px solid
      ${({ theme, primary }) => (primary ? theme.brandRed : theme.brandBlue)};
  }
`

export default Button
